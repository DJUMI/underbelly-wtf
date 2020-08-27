import React, { useState } from 'react';

import { LinkButton, OpenButton } from '../../../common';
import MapModal from '../modals/MapModal';

const Page9A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_1.jpg';
    const bg1 = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_1_nomap.jpg';
    const [showModal, setShowModal] = useState(false);

    const renderButtons = () => (
        <>
            <OpenButton title='map' onClick={() => setShowModal(true)} top='82vh' left='5vw' width='10vw' />
            <LinkButton title='sign' link='/dystopia/9A_2' top='48vh' left='36vw' width='10vw' />
            <LinkButton title='poster' link='/dystopia/9A_1' top='34vh' left='88.25vw' width='10vw' />
        </>
    );

    return (
        <div className='page'>
            {showModal ? <img className='page__image' src={bg1} alt='Computer Screen' /> : <img className='page__image' src={bg} alt='Computer Screen' />}
            {showModal ? <MapModal /> : renderButtons()}
        </div>
    );
};

export { Page9A };