import React from 'react';

import { LinkButton } from '../../../common';

//TODO: add eggs
const Page2B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia2B.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Inside of abandoned car' />
            <LinkButton title='newspaper' link='/dystopia/1B' top='51vh' left='30vw' width='20vw'/>
            <LinkButton title='masks' link='/dystopia/1B' top='37.5vh' left='56.5vw' width='10vw'/>
            <LinkButton title='flier' link='/dystopia/1B' top='22vh' left='54vw' width='10vw'/>
        </div>
    );
};

export { Page2B };