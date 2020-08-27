import React from 'react';

import { BackButton, NextButton } from '../../../common';

const Page11C_5 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia11C_5.jpg';
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <BackButton link='/dystopia/11C_3' theme='dystopia' />
            <NextButton link='/dystopia/11C_6' theme='dystopia' />
        </div>
    );
};

export { Page11C_5 };