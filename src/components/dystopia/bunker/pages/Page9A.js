import React from 'react';

import { LinkButton, MapButton } from '../../../common';

//TODO: add eggs
const Page9A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_1.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Computer Screen' />
            <MapButton />
            <LinkButton title='sign' link='/dystopia/8A' top='48vh' left='36vw' width='10vw'/>
            <LinkButton title='poster' link='/dystopia/8A' top='34vh' left='88.25vw' width='10vw'/>
        </div>
    );
};

export { Page9A };