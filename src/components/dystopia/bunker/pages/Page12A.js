import React from 'react';

import { LinkButton, MapButton } from '../../../common';

const Page12A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_4.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Cinema' />
            <MapButton />
            <LinkButton title='door' link='/dystopia/13A' top='20vh' left='36.75vw' width='10vw'/>
        </div>
    );
};

export { Page12A };