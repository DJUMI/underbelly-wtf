import React from 'react';

import { Dialogue } from '../../../common';

const Page5B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia4B.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two women with weapons down' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Person 2', message: 'Who the f*ck are you?' },
                    { speaker: 'Person 1', message: 'Did the Hospital District send you? Because we’re authorized to be here by the Bunker District.' }
                ]}
                responses={[
                    { link: '/dystopia/6B_1', message: '"I’m sorry, I don’t think I’m supposed to be here. I have no idea what is going on."' }
                ]}
            />
        </div>
    );
};

export { Page5B };