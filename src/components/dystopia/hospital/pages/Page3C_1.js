import React from 'react';

import { Dialogue } from '../../../common';

const Page3C_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia3C.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two armed guards stand near a hospital entrance' />
            <Dialogue 
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'HDS Guard "Moore"', message: 'State your purpose.' }
                ]}
                responses={[
                    { link: '/dystopia/3C_2', message: '"Is this the entrance to the Hospital?"' }
                ]}
            />
        </div>
    );
};

export { Page3C_1 };