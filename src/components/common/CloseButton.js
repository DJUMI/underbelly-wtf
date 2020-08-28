import React from 'react';

import blackX from '../../assets/icons/dystopia/X_black.png';
import whiteX from '../../assets/icons/dystopia/X_white.png';

const CloseButton = ({ onClick, theme, white }) => {
    const icon = white ? whiteX : blackX;

    return (
        <div className='close-button__container button-fade'>
            <img className={`close-icon--${theme}`} onClick={onClick} src={icon} alt={'x'} />
        </div>
    );
}

export { CloseButton };