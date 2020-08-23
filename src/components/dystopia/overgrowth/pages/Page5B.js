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
                    { speaker: 'Speaker2', message: 'Are you trying to poach on our finds?' },
                    { speaker: 'Speaker1', message: 'Because we’re working for the Bunker District, we’re not ‘looting’—f*ck the Hospital District for villainizing us.' }
                ]}
                responses={[
                    { link: '/dystopia/6B_1', message: '"Can you start from the beginning? I have no idea what’s going on…"' }
                ]}
            />
        </div>
    );
};

export { Page5B };