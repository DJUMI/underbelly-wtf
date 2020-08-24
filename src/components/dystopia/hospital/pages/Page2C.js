import React from 'react';

import { LinkButton } from '../../../common';

const Page2C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia3C.jpg';
    

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two armed guards stand near a hospital entrance' />
            <LinkButton title='guards' link='/dystopia/3C_1' top='35vh' left='32vw' width='20vw'/>
            <LinkButton title='entrance' link='/dystopia/4C' top='75vh' left='73vw' width='20vw'/>
        </div>
    );
};

export { Page2C };