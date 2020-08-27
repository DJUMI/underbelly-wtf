import React from 'react';

import { Dialogue } from '../../../common';

const Page5A1_B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia5A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <Dialogue
                theme='dystopia'
                bottom
                buttonLink='/dystopia/5A1_C'
                messages={[
                    { speaker: 'Doctor', message: 'With our health screenings and limiting only Scavengers to wander, we have been able to maintain zero plague patients in the Bunker Districts. Milwaukee is also at zero, but Sheboygan recently had an outbreak in their District. It was devastating and we are doing everything in our power to keep that from happening here.' }
                ]}
            />
        </div>
    );
};

export { Page5A1_B };