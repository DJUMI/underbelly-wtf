import React, { useState } from 'react';

import { LinkButton, OpenButton } from '../../../common';
import MapModal from '../modals/MapModal';

const Page12A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_4.jpg';
    const bg1 = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_4_nomap.jpg';
    const [showModal, setShowModal] = useState(false);

    const renderButtons = () => (
        <>
            <OpenButton title='map' onClick={() => setShowModal(true)} top='82vh' left='5vw' width='10vw' />
            <LinkButton title='door' link='/dystopia/13A' top='20vh' left='36.75vw' width='10vw' />
        </>
    );

    return (
        <div className='page'>
            {showModal ? <img className='page__image' src={bg1} alt='Cinema' /> : <img className='page__image' src={bg} alt='Cinema' />}
            {showModal ? <MapModal /> : renderButtons()}
        </div>
    );
};

export { Page12A };