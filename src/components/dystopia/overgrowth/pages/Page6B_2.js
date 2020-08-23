import React from 'react';

import { Dialogue } from '../../../common';

const Page6B_2 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia6B.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two women' />
            <Dialogue
                theme='dystopia'
                bottom
                button
                buttonLink='/dystopia/6B_3'
                messages={[
                    { speaker: 'Person 1', message: 'You look like you could use some rest. I’d go talk to someone in the Bunker District, they probably have an open cot. You should have passed it on your way here.' },
                    { speaker: 'Person 2', message: 'Yeah, I heard they transferred a few residents to the Sick District this morning. Poor folk.' }
                ]}
            />
        </div>
    );
};

export { Page6B_2 };