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
                    { speaker: 'HDS Guard "Moore"', message: 'Have you been living under a f*cking rock? Without us, the district would erupt into chaos. People would be trying to break in every other day. It’s our duty to keep the blessed protected.' }
                ]}
                responses={[
                    { link: '/dystopia/3C_4', message: '"Oh. Okay, how do I get into the Hospital District?"' }
                ]}
            />
        </div>
    );
};

export { Page3C_3 };