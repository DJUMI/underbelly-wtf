import React from 'react';

import { Dialogue } from '../../../common';

const Page3C_3 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia3C.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two armed guards stand near a hospital entrance' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'HDS Guard "Moore"', message: 'Have you been living under a f*cking rock? The military was disbanded years ago, when the country had to shut down because of The Second Wave. I used to be a f*cking Marine before this sh*t. I’m Police, now. Hoo rah…' }
                ]}
                responses={[
                    { link: '/dystopia/3C_4', message: '"Oh. Okay, if it’s a district does that mean this is a shelter?"' }
                ]}
            />
        </div>
    );
};

export { Page3C_3 };