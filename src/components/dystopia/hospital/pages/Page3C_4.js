import React from 'react';

import { Dialogue } from '../../../common';

const Page3C_4 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia3C.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two armed guards stand near a hospital entrance' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'HDS Guard "Moore"', message: 'Your feet work, don’t they?  If you’re eligible, you can go in. If you’re not — which, by the looks of it, you aren’t — you can f*ck off. Maybe the Sick District will take you.' }
                ]}
                responses={[
                    { link: '/dystopia/3C_5', message: '"But I don’t feel sick."' }
                ]}
            />
        </div>
    );
};

export { Page3C_4 };