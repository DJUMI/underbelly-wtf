import React from 'react';

import { Dialogue } from '../../../common';

const Page7A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia8A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <Dialogue
                theme='dystopia'
                bottom
                button
                buttonLink='/dystopia/8A'
                messages={[
                    { speaker: 'HDS Guard "Moore"', message: 'This paper has a map of the District, the number of an available apartment that you can use while you live here, and my stamp of clean health. Keep this on you at all times, you will be asked to show it at random health checkpoints.' },
                    { speaker: 'HDS Guard "Moore"', message: 'Welcome to the East Side Bunker District!' }
                ]}
            />
        </div>
    );
};

export { Page7A };