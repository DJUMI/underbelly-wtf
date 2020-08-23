import React from 'react';

import { Dialogue } from '../../../common';

const Page5A_A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia5A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <Dialogue 
                theme='dystopia'
                bottom={true}
                button={false}
                messages={[
                    { speaker: 'Doctor', message: 'Hello, welcome to the East Side Bunker District. I need to do a preliminary health screening. Please know, if you exhibit any symptoms, you will be turned away for the safety of the Bunker residents. Do you consent?' }
                ]}
                responses={[
                    { link: '/dystopia/5A1_A', message: '“What happens to the sick people who are turned away?”' },
                    { link: '/dystopia', message: '“Sorry I don\'t consent.”' },
                    { link: '/dystopia/7A', message: '“I consent”' }
                ]}
            />
        </div>
    );
};

export { Page5A_A };