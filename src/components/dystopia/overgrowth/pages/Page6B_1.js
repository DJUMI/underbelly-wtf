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
                    { speaker: 'Person 1', message: 'We’re Bunker scavengers, we’re looking for scrap metal. You’d be surprised what people have just left .' },
                    { speaker: 'Person 2', message: 'The Bunker District melts down the scraps we find to make more beds for the Clinics and stuff.' }
                ]}
            />
        </div>
    );
};

export { Page6B_1 };