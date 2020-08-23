import React from 'react';

import { Dialogue } from '../../../common';

const Page5C_6 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_3.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <Dialogue
                theme='dystopia'
                bottom
                button
                buttonLink='/dystopia/9C'
                fast
                messages={[
                    { speaker: 'Receptionist', message: 'You don’t get to just leave once you’ve entered the Hospital District. It’s rude and devilish.' },
                    { speaker: '', message: 'Police! Seize this demon immediately and send them to the Sick District!' }
                ]}
            />
        </div>
    );
};

export { Page5C_6 };