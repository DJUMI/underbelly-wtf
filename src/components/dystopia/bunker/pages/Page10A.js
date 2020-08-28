import React, { useState } from 'react';

import { Dialogue, OpenButton } from '../../../common';
import MapModal from '../modals/MapModal';

const Page10A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_2.jpg';
    const bg1 = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_2_nomap.jpg';
    const [showModal, setShowModal] = useState(false);

    const renderContent = () => (
        <>
            <Dialogue
                theme='dystopia'
                fast
                messages={[
                    { speaker: '', message: '“Looks like my dollar bills don’t have any value here. Trade is the currency.”' }
                ]}
            />
            <OpenButton title='map' onClick={() => setShowModal(true)} top='82vh' left='5vw' width='10vw' />
        </>
    );

    return (
        <div className='page'>
            {showModal ? <img className='page__image' src={bg1} alt='Computer Screen' /> : <img className='page__image' src={bg} alt='Computer Screen' />}
            {showModal ? <MapModal from={1} onClose={() => setShowModal(false)}/> : renderContent()}
        </div>
    );
};

export { Page10A };