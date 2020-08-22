import React from 'react';
import { Link } from 'react-router-dom';

import { MapButton } from '../../../common';

const Page11A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_3.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Cinema' />
            <MapButton />
        </div>
    );
};

export { Page11A };