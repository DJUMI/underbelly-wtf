import React from 'react';

import { BackButton } from '../../../common';

const Page9A_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_1A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Computer Screen' />
            <BackButton link='/dystopia/9A' theme='dystopia' white />
        </div>
    );
};

export { Page9A_1 };