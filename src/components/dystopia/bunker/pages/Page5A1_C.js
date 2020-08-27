import React from 'react';

import { Dialogue } from '../../../common';

const Page5A1_C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia5A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Doctor', message: 'We rely entirely on recycled air, so if someone has the plague, it is almost certain that the entire District will get it and wipe out our population. The virus, from our shared observation, mutated a while back and has become a death sentence. We mustn’t take any risks.' }
                ]}
                responses={[
                    { link: '/dystopia/5A2', message: '“ecycled air? It almost seems riskier to stay in Districts. Why not go back into the world so that you’re more able to spread out?”' },
                    { link: '/dystopia/6A', message: '“I see, thanks for explaining. I consent to an exam.”' }
                ]}
            />
        </div>
    );
};

export { Page5A1_C };