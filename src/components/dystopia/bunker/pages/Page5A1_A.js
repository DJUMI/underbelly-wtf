import React from 'react';

import { Dialogue } from '../../../common';

const Page5A1_A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia5A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <Dialogue 
                theme='dystopia'
                bottom
                buttonLink='/dystopia/5A1_B'
                messages={[
                    { speaker: 'Doctor', message: 'There is a Sick District that is capable of treating plague patients. We must focus on the current residents in our District and right now the clinics are all full and we’ve got hundreds of residents who we must think of.' }
                ]}
            />
        </div>
    );
};

export { Page5A1_A };