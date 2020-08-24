import React from 'react';

import { LinkButton, MapButton } from '../../../common';

const Page13A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia10A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Cinema' />
            <MapButton />
            <LinkButton title='computer' link='/dystopia/13A_2' top='45vh' left='13vw' width='10vw'/>
            <LinkButton title='ipod' link='/dystopia/13A_1' top='84vh' left='74vw' width='3vw'/>
        </div>
    );
};

export { Page13A };