import React from 'react';

import { BackButton } from '../../../common';

//TODO: add audio controls
const Page13A_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia13A_1.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='ipod' />
            <BackButton link='/dystopia/13A' theme='dystopia' />
        </div>
    );
};

export { Page13A_1 };