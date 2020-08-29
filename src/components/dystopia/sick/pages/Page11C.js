import React from 'react';

import { Dialogue } from '../../../common';

const Page11C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_2.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Doctor', message: 'Welcome to the Sick District.' }
                ]}
                responses={[
                    { link: '/dystopia/11C_1', message: '"I thought this was going to be a literal plague zone."'},
                    { link: '/dystopia/12C', message: '"I think I made a wrong turn, I’m not supposed to be here."'}
                ]}
            />
        </div>
    );
};

export { Page11C };