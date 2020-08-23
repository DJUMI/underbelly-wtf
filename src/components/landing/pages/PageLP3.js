import React from 'react';

import { LinkButton } from '../../common';

const PageLP3 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/landing/LP3.png';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Enter' />
            <LinkButton title='start' link='/LP4' top='21.5vh' left='65vw' width='20vw'/>
        </div>
    );
};

export { PageLP3 };