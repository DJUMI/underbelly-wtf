import React from 'react';

import { BackButton } from '../../../common';

const Page4L_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/utopia/nature/4L_1.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Old person walking to a bus stop' />
            <BackButton link='/utopia/4L' theme='utopia' />
        </div>
    );
};

export { Page4L_1 };