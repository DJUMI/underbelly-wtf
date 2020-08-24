import React from 'react';
import { Link } from 'react-router-dom';

import blackArrow from '../../assets/icons/dystopia/back-small.png';
import whiteArrow from '../../assets/icons/dystopia/back-small.png';

const BackButton = ({ link, theme, white }) => {
    const arrow = white ? whiteArrow : blackArrow;
    
    return (
        <div className='back-button__container'>
            <Link to={link}>
                <img className={`back-arrow--${theme}`} src={arrow} alt={'left arrow'} />
            </Link>
        </div>
    );
}

export { BackButton };