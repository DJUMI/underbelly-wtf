import React from 'react';

import { LinkButton } from '../../../common';

const Page4C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <LinkButton title='receptionist' link='/dystopia/5C_1' top='18vh' left='38vw' width='20vw'/>
        </div>
    );
};

export { Page4C };