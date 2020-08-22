import React from 'react';

import MapModal from '../modals/MapModal';

const Page8A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia8A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Map of the bunker district' />
            <MapModal />
        </div>
    );
};

export { Page8A };