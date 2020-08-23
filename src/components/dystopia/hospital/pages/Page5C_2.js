import React from 'react';

import { Dialogue } from '../../../common';

const Page5C_2 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_1.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Receptionist', message: 'Wonderful. Please, come closer, child. Now tell me, what is your wealth?' }
                ]}
                responses={[
                    { link: '/dystopia/5C_3', message: '"under $50,000"' },
                    { link: '/dystopia/5C_4', message: '"$50,000 - $1,000,000"' },
                    { link: '/dystopia/5C_7', message: '"over $1,000,000"' },
                    { link: '/dystopia/1C', message: '"What does that have anything to do with anything? I think I’d like to leave."' }
                ]}
            />
        </div>
    );
};

export { Page5C_2 };