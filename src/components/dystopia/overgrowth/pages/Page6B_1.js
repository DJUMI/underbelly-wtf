import React from 'react';

import { Dialogue } from '../../../common';

const Page6B_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia6B.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two women' />
            <Dialogue
                theme='dystopia'
                bottom
                button
                buttonLink='/dystopia/6B_2'
                messages={[
                    { speaker: 'Speaker1', message: 'We’re scavenging. We’re scavengers.' },
                    { speaker: 'Speaker2', message: 'I guess it’s not really super public yet, but the Bunker District finally has some ventilation for melting down old metals from this B.C. world so we can make more bed frames for the Clinics and stuff.' }
                ]}
            />
        </div>
    );
};

export { Page6B_1 };