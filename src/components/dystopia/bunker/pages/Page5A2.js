import React from 'react';

import { Dialogue } from '../../../common';

const Page5A2 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia5A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Doctor', message: 'Most would rather not take the unknown risk. You are guaranteed to be safe here—so long as we keep the plague out of our District. I hope  that answers your questions. Let’s move on with the exam. Do you consent?' }
                ]}
                responses={[
                    { link: '/dystopia/6A', message: '“Yes, thank you.”' },
                    { link: '/dystopia', message: '“No, I’d rather take my chances out there...”' }
                ]}
            />
        </div>
    );
};

export { Page5A2 };