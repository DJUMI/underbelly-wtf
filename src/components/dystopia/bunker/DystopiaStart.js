import React from 'react';

import { LinkButton } from '../../common';

const DystopiaStart = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/dystopia_start.jpg';
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Creepy Bunker' />
            <LinkButton title='comp' link='/dystopia/1A' top='57.25vh' left='58.4vw' width='6vw'/>
            <LinkButton title='fence' link='/dystopia/1B' top='37.5vh' left='71.68vw' width='6vw'/>
        </div>
    );
};

export default DystopiaStart;
