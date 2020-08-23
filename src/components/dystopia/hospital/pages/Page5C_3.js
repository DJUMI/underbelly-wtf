import React from 'react';

import { Dialogue } from '../../../common';

const Page5C_3 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_3.jpg';

    return (

        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <Dialogue
                theme='dystopia'
                bottom
                button
                fast
                buttonLink='/dystopia/9C'
                messages={[
                    { speaker: 'Receptionist', message: 'Guards! Please escort this heathen out of this office. Maybe it would be worth dropping them off at the Sick District, since they’ll probably end up there eventually anyway.' }
                ]}
            />
        </div>
    );
};

export { Page5C_3 };