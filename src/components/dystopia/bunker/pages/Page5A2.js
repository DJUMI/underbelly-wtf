import React from 'react';

import { Dialogue } from '../../../common';

const Page5A2 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia5A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <Dialogue
                theme='dystopia'
                bottom={true}
                messages={[
                    { speaker: 'Doctor', message: 'Fear, mostly. We would rather not take that unknown risk, it’s guaranteed safe here—so long as we keep COVID out of or District. Hopefully that answers your questions. Let’s move on with the exam. Do you consent?' }
                ]}
                responses={[
                    { link: '/dystopia/6A', message: '“Yes, thank you.”' },
                    { link: '/dystopia', message: '“No, thank you, I’ll leave now.”' }
                ]}
            />
        </div>
    );
};

export { Page5A2 };