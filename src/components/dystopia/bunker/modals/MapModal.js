import React from 'react';

import { LinkButton } from '../../../common';

const MapModal = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A.png';

    return (
        <div className='modal__container'>
            <img className='modal__image' src={bg} alt='Map' />
            <LinkButton title='entrance' link='/dystopia/4A' top='60vh' left='31vw' width='8vw'/>
            <LinkButton title='clinic' link='/dystopia/9A' top='60vh' left='44vw' width='8vw'/>
            <LinkButton title='market' link='/dystopia/10A' top='43vh' left='43vw' width='10vw'/>
            <LinkButton title='cinema' link='/dystopia/11A' top='54vh' left='59vw' width='10vw'/>
            <LinkButton title='apartment' link='/dystopia/12A' top='15vh' left='56vw' width='10vw'/>
        </div>
    );
};

export default MapModal;
