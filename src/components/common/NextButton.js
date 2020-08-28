import React from 'react';
import { Link } from 'react-router-dom';

import dArrow from '../../assets/icons/dystopia/forward-small.png';
import uArrow from '../../assets/icons/utopia/UTOPIA_ARROW_RIGHT.png';

const NextButton = ({ link, theme, white }) => {
    var arrow;
    if (theme === 'dystopia') {
        arrow = dArrow;
    } else {
        arrow = uArrow;
    }
    
    return (
        <div className={`next-button__container--${theme} button-fade`}>
            <Link to={link}>
                <img className={`next-arrow--${theme}`} src={arrow} alt={'right arrow'} />
            </Link>
        </div>
    );
}

export { NextButton };