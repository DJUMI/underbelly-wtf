import React from 'react';

import { BackButton } from '../../../common';

const Page11C_5 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia11C_5.png';
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <BackButton link='/dystopia/10C' theme='dystopia' />
        </div>
    );
};

export { Page11C_5 };