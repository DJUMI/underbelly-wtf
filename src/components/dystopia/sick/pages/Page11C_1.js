import React from 'react';

import { Dialogue } from '../../../common';

const Page11C_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_2.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <Dialogue
                theme='dystopia'
                bottom
                buttonLink='/dystopia/11C_2'
                messages={[
                    { speaker: 'Doctor', message: 'Fortunately, the plague is very rare and is now treatable with the right vaccine. Germany sent us the instructions after the Sheboygan District was obliterated last year.' },
                    { speaker: '', message: 'We would like to spread the vaccine to the rest of the Districts, but the guards and the Hospital District have maintained control of the narrative through alternative-facts.  We’ve had to keep the truth a secret to protect as many people as possible.' }
                ]}
            />
        </div>
    );
};

export { Page11C_1 };