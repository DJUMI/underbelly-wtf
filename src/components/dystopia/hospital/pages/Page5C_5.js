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
                    { speaker: 'Receptionist', message: 'We will train you on how to treat the people who can afford to live here, those who are truly blessed.  Once a resident purchases you - we can’t let this be a free-ride of course - you will be given a modest room in their apartment.' },
                    { speaker: '', message: 'Then you are one of the lucky ones who gets to care for these truly Blessed souls. Praise be.' }
                ]}
                responses={[
                    { link: '/dystopia/6C', message: '"Um… I suppose. That sounds better than being sent to the Sick District."' },
                    { link: '/dystopia/5C_6', message: '"I’m sorry, did you say they ‘purchase’ me? Do people actually say yes to that? I think I’m going to see myself out."' }
                ]}
            />
        </div>
    );
};

export { Page5C_5 };