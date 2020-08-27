import React from 'react';

import { BackButton } from '../../../common';

const Page11C_6 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia11C_6.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <BackButton link='/dystopia/11C_5' theme='dystopia' />
        </div>
    );
};

export { Page11C_6 };