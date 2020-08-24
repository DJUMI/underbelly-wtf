import React from 'react';

import { BackButton, LinkButton } from '../../../common';

const Page13A_2 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia13A_2.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='computer screen' />
            <BackButton link='/dystopia/13A' theme='dystopia' />
            <LinkButton title='comp' link='/utopia' color='red' top='78vh' left='50vw' width='10vw'/>
        </div>
    );
};

export { Page13A_2 };