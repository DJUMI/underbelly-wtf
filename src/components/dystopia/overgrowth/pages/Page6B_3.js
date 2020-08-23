import React from 'react';

import { Dialogue } from '../../../common';

const Page6B_3 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia6B.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two women' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Speaker2', message: 'Before you go, though…since you seem new around here…' },
                    { speaker: 'Speaker1', message: 'Avoid the Hospital District. They’ve built a bit of a ‘Utopia’ there. You can’t trust them, it’s all doublespeak.' }
                ]}
                responses={[
                    { link: '/dystopia/1B', message: '"Thanks for the heads up! And sorry for interrupting your scavenging."'}
                ]}
            />
        </div>
    );
};

export { Page6B_3 };