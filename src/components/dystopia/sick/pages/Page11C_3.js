import React from 'react';

import { Dialogue, LinkButton } from '../../../common';

const Page11C_3 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_3.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <LinkButton link='/dystopia/11C_5' theme='dystopia' top='52vh' left='-4vw' width='10vw' />
            <Dialogue
                theme='dystopia'
                bottom
                buttonLink='/dystopia/11C_4'
                messages={[
                    { speaker: 'Female Doctor', message: 'There, that wasn’t so bad, was it? Now, you are welcome to stay here for as long as you like, as I said we have open beds. Additionally, there are communities on the West Side that are starting back up again, secretly, all with vaccines.' },
                    { speaker: '', message: 'Or, you can help out the Bunker Districts. If you go to the Bunker Districts you mustn’t tell anyone that you’ve been here. Create some sort of story of where you’ve been this evening. As I said, we must keep up the illusion until the time is right.' }
                ]}
            />
        </div>
    );
};

export { Page11C_3 };