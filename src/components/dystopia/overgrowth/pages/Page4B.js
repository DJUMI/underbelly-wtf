import React from 'react';

import { Dialogue, LinkButton } from '../../../common';

const Page4B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia4B.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two armed women looting a house' />
            <Dialogue
                theme='dystopia'
                bottom
                responses={[
                    { link: '/dystopia/5B', message: '“Ope, Sorry”' }
                ]}
            />
            <LinkButton title='gun' link='/dystopia/4B_1' color='red' top='60vh' left='70vw' width='10vw'/>
        </div>
    );
};

export { Page4B };