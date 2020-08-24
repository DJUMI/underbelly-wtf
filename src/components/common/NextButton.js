import React from 'react';
import { Link } from 'react-router-dom';

import blackArrow from '../../assets/icons/dystopia/forward-small.png';
import whiteArrow from '../../assets/icons/dystopia/forward-small.png';

const NextButton = ({ link, theme, white }) => {
    const arrow = white ? whiteArrow : blackArrow;
    
    return (
        <div className='next-button__container'>
            <Link to={link}>
                <img className={`next-arrow--${theme}`} src={arrow} alt={'right arrow'} />
            </Link>
        </div>
    );
}

export { NextButton };