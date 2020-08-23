import React from 'react';

import { Dialogue } from '../../../common';

const Page5C_7 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_1.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <Dialogue
                theme='dystopia'
                bottom
                buttonLink='/dystopia/7C'
                fast
                messages={[
                    { speaker: 'Receptionist', message: 'Praise Him! How lucky you are to be able to afford residence here! I will remove the funds from your account immediately, please come in right away!' }
                ]}
            />
        </div>
    );
};

export { Page5C_7 };