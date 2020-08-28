import React from 'react';

import { LinkButton, CloseButton } from '../../../common';

const MapModal = ({ from, white, onClose }) => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/DystopiaMap.png';

    return (
        <div className='modal__container'>
            <img className='modal__image' src={bg} alt='Map' />
            <CloseButton onClick={onClose} theme='dystopia' white={white} />
            <LinkButton title='entrance' link='/dystopia/4A' top='61vh' left='30vw' width='8vw'/>
            {from === 0 ? null : <LinkButton title='clinic' link='/dystopia/9A' top='61vh' left='43vw' width='8vw'/>}
            {from === 1 ? null : <LinkButton title='market' link='/dystopia/10A' top='44vh' left='42vw' width='10vw'/>}
            {from === 2 ? null : <LinkButton title='cinema' link='/dystopia/11A' top='55vh' left='58vw' width='10vw'/>}
            {from === 3 ? null : <LinkButton title='apartment' link='/dystopia/12A' top='14.5vh' left='55.5vw' width='10vw'/>}
        </div>
    );
};

export default MapModal;

MapModal.defaultProps = {
    white: true,
    from: 4,
}