import React from 'react';

import { Dialogue } from '../../../common';

const Page5C_5 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_1.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Receptionist', message: 'You learn how to treat the people who can afford to live here, which is really a blessing because you wouldn’t want to live in those vile bunkers. Instead, we give you a modest room in a resident’s apartment — after they’ve bought you, of course — and then you are one of the lucky ones who gets to care for these truly Lucky souls.' }
                ]}
                responses={[
                    { link: '/dystopia/6C', message: '"Okay, that doesn’t sound creepy at all. Count me in!"' },
                    { link: '/dystopia/5C_6', message: '"Sorry, did you say they ‘buy’ me? That sounds like a nightmare, I’d like to leave."' }
                ]}
            />
        </div>
    );
};

export { Page5C_5 };