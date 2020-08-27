import React, { useState } from 'react';

import { LinkButton, OpenButton } from '../../../common';
import MapModal from '../modals/MapModal';

const Page13A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia10A.jpg';
    const bg1 = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia10A_nomap.jpg';
    const [showModal, setShowModal] = useState(false);

    const renderButtons = () => (
        <>
            <OpenButton title='map' onClick={() => setShowModal(true)} top='82vh' left='5vw' width='10vw' />
            <LinkButton title='computer' link='/dystopia/13A_2' top='45vh' left='13vw' width='10vw' />
            <LinkButton title='ipod' link='/dystopia/13A_1' top='84vh' left='74vw' width='3vw' />
        </>
    );

    return (
        <div className='page'>
            {showModal ? <img className='page__image' src={bg1} alt='Bedroom' /> : <img className='page__image' src={bg} alt='Bedroom' />}
            {showModal ? <MapModal /> : renderButtons()}
        </div>
    );
};

export { Page13A };