import React from 'react';

import { BackButton } from '../../../common';

const Page3L_1_squirrel = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/utopia/nature/3L_1_squirrel.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Squirrel crying' />
            <BackButton link='/utopia/3L_1' theme='utopia' />
        </div>
    );
};

export { Page3L_1_squirrel };