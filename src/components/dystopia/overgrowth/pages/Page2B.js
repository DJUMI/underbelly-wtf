import React, { useState } from 'react';

import { BackButton, CloseButton, OpenButton } from '../../../common';
import { FlyerModal, MaskModal, PaperModal } from '../modals';

const Page2B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia2B.jpg';

    const [showModal, setShowModal] = useState(0);

    const renderButtons = () => (
        <>
            <BackButton link='/dystopia/1B' theme='dystopia' />
            <OpenButton title='newspaper' onClick={() => setShowModal(1)} top='51vh' left='30vw' width='20vw' />
            <OpenButton title='masks' onClick={() => setShowModal(2)} top='37.5vh' left='56.5vw' width='10vw' />
            <OpenButton title='flier' onClick={() => setShowModal(3)} top='22vh' left='54vw' width='10vw' />
        </>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Inside of abandoned car' />
            {showModal === 0 ? renderButtons() : null}
            {showModal === 1 ? <PaperModal /> : null}
            {showModal === 2 ? <MaskModal /> : null}
            {showModal === 3 ? <FlyerModal /> : null}
            {showModal ? <CloseButton onClick={() => setShowModal(0)} theme='dystopia'/> : null}
        </div>
    );
};

export { Page2B };