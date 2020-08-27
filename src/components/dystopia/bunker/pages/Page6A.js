import React from 'react';

import { Dialogue } from '../../../common';

const Page6A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia7A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <Dialogue
                theme='dystopia'
                bottom
                buttonLink='/dystopia/7A'
                messages={[
                    { speaker: 'Doctor', message: 'Great, we scanned for your vitals when you arrived. Like I said before, we can’t stand to take any risks. You’re clean, although you could probably stand to floss your teeth a little more.' }
                ]}
            />
        </div>
    );
};

export { Page6A };