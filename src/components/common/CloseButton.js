import React from 'react';

import blackX from '../../assets/icons/dystopia/back-small.png';
import whiteX from '../../assets/icons/dystopia/back-small.png';

const CloseButton = ({ onClick, theme, white }) => {
    const icon = white ? whiteX : blackX;

    return (
        <div className='close-button__container'>
            <img className={`close-icon--${theme}`} onClick={onClick} src={icon} alt={'x'} />
        </div>
    );
}

export { CloseButton };