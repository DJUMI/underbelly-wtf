import React from 'react';

import { Dialogue } from '../../../common';

const Page5C_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_1.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Receptionist', message: 'Welcome to the blesséd Hospital District, praise be. Here, all lives matter. We treat every resident with a private doctor, especially if you contract that dreaded COVID being spread by those Bunker heathens. Please stand still while we scan you.' }
                ]}
                responses={[
                    { link: '/dystopia/5C_2', message: '"Ok…?"' },
                    { link: '/dystopia/1C', message: '"I don’t consent to a scan, I’d like to leave."' }
                ]}
            />
        </div>
    );
};

export { Page5C_1 };