import React from 'react';

import { Dialogue } from '../../../common';

const Page5A1_B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia5A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <Dialogue
                theme='dystopia'
                bottom={true}
                button={true}
                buttonLink='/dystopia/5A1_C'
                messages={[
                    { speaker: 'HDS Guard "Moore"', message: 'With our health screenings and limiting only Scavengers to wander, we have actually had zero COVID cases in the Bunker Districts. Milwaukee is also at zero, but Sheboygan recently had an outbreak in their District…It was devastating.' }
                ]}
            />
        </div>
    );
};

export { Page5A1_B };