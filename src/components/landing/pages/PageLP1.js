import React from 'react';

import { SquareButton } from '../../common';

const PageLP1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/landing/LP1.png';
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Enter' />
            <SquareButton link='/LP2' top='42vh' left='20vw' height='18vh' width='60vw' />
        </div>
    );
};

export { PageLP1 };