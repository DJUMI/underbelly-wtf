import React from 'react';

import { LinkButton, MapButton } from '../../../common';

//TODO: add eggs
const Page13A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia10A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Cinema' />
            <MapButton />
            <LinkButton title='ipod' link='/dystopia/13A' top='84vh' left='74vw' width='3vw'/>
        </div>
    );
};

export { Page13A };