import React from 'react';

import { Dialogue } from '../../../common';

const Page5A1_A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia5A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <Dialogue 
                theme='dystopia'
                bottom={true}
                button={true}
                buttonLink='/dystopia/5A1_B'
                messages={[
                    { speaker: 'HDS Guard "Moore"', message: 'There is a Sick District that is easy enough to get to from here. It’s obviously not ideal, but we have to focus on the current residents in the District and right now the clinics are all full with non-COVID cases.' }
                ]}
            />
        </div>
    );
};

export { Page5A1_A };