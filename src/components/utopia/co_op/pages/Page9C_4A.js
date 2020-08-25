import React from 'react';

import { BackButton, LinkButton } from '../../../common';

const Page9C_4A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/utopia/co_op/9C_4A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Bedroom' />
            <BackButton link='/utopia/9C_4' theme='utopia' />
            <LinkButton title='start' link='/dystopia' top='30vh' left='40vw' width='20vw' />
        </div>
    );
};

export { Page9C_4A };