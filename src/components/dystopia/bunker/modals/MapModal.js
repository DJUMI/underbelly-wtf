import React from 'react';

import { LinkButton } from '../../../common';

const MapModal = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/DystopiaMap.png';

    return (
        <div className='modal__container'>
            <img className='modal__image' src={bg} alt='Map' />
            <LinkButton title='entrance' link='/dystopia/4A' top='61vh' left='30vw' width='8vw'/>
            <LinkButton title='clinic' link='/dystopia/9A' top='61vh' left='43vw' width='8vw'/>
            <LinkButton title='market' link='/dystopia/10A' top='44vh' left='42vw' width='10vw'/>
            <LinkButton title='cinema' link='/dystopia/11A' top='55vh' left='58vw' width='10vw'/>
            <LinkButton title='apartment' link='/dystopia/12A' top='14.5vh' left='55.5vw' width='10vw'/>
        </div>
    );
};

export default MapModal;
