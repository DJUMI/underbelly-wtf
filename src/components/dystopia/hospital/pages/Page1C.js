import React from 'react';

import { BackButton, LinkButton } from '../../../common';

const Page1C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia2C.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='View of the capitol from state street' />
            <BackButton link='/dystopia/1B' theme='dystopia' />
            <LinkButton title='guards' link='/dystopia/2C' top='40vh' left='79.5vw' width='5vw'/>
        </div>
    );
};

export { Page1C };