import React, { useState } from 'react';

import { OpenButton } from '../../../common';
import MapModal from '../modals/MapModal';

const Page11A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_3.jpg';
    const bg1 = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_3.jpg';
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='page'>
            {showModal ? <img className='page__image' src={bg1} alt='Computer Screen' /> : <img className='page__image' src={bg} alt='Computer Screen' />}
            {showModal ? <MapModal from={2} onClose={() => setShowModal(false)} /> : <OpenButton title='map' onClick={() => setShowModal(true)} top='82vh' left='5vw' width='10vw' />}
        </div>
    );
};

export { Page11A };