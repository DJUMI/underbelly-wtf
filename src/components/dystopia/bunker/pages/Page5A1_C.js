import React from 'react';

import { Dialogue } from '../../../common';

const Page5A1_C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia5A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <Dialogue
                theme='dystopia'
                bottom={true}
                messages={[
                    { speaker: 'Doctor', message: 'We rely on recycled air, so if someone has COVID, it’s highly likely that the entire District will get it and wipe out that population. The virus, from our shared observation, mutated last year and has become a complete death sentence.' }
                ]}
                responses={[
                    { link: '/dystopia/5A2', message: '“No cases? It almost seems more risky to stay in Districts…why not go back into the world so that you’re more spread out?”' },
                    { link: '/dystopia/6A', message: '“I see, thanks for explaining. I consent to an exam.”' }
                ]}
            />
        </div>
    );
};

export { Page5A1_C };