import React from 'react';

import { BorderButton, OpenButton } from '../../common';

const PageLP1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/landing/LP1.png';
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Enter' />
            <BorderButton link='/LP2' top='44vh' left='21vw' height='14vh' width='58vw' />
            <OpenButton top='75vh' left='40vw' width='20vw'/>
        </div>
    );
};

export { PageLP1 };