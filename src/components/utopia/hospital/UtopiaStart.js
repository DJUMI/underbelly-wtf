import React, { useContext, useEffect, useState } from 'react';

import { CloseButton, LinkButton, OpenButton } from '../../common';
import { CabinetModal, PosterModal } from './modals';
import { Context as AudioContext } from '../../../context/AudioContext';
import bg from '../../../assets/images/utopia/hospital/1H_UTOPIA.jpg'

const UtopiaStart = () => {
    const [showModal, setShowModal] = useState(0);
    const { playSong } = useContext(AudioContext);

    useEffect(() => {
        playSong('track1H');
    }, []);

    const renderButtons = () => (
        <>
            <LinkButton title='bed' link='/utopia/2HA' top='60vh' left='42vw' width='20vw' />
            <OpenButton title='poster' onClick={() => setShowModal(1)} top='26vh' left='2vw' width='10vw' />
            <OpenButton title='cabinet' onClick={() => setShowModal(2)} top='8vh' left='54vw' width='10vw' />
        </>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital Room' />
            {showModal === 0 ? renderButtons() : null}
            {showModal === 1 ? <PosterModal /> : null}
            {showModal === 2 ? <CabinetModal /> : null}
            {showModal ? <CloseButton onClick={() => setShowModal(0)} theme='dystopia'/> : null}
        </div>
    );
};

export default UtopiaStart;