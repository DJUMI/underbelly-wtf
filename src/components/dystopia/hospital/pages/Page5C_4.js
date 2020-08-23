import React from 'react';

import { Dialogue } from '../../../common';

const Page5C_4 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_1.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Receptionist', message: 'It’s good you are healthy, but unfortunately you cannot live in this coveted Hospital District. You can, however, afford to pay for Medical Training. Well done, you!' }
                ]}
                responses={[
                    { link: '/dystopia/5C_5', message: '"What does that mean?"' },
                    { link: '/dystopia/1C', message: '"No, I would like to leave."' }
                ]}
            />
        </div>
    );
};

export { Page5C_4 };