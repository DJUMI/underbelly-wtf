import React from 'react';
import { Link } from 'react-router-dom';

import dArrow from '../../assets/icons/dystopia/back-small.png';
import dArrowWhite from '../../assets/icons/dystopia/back-small.png';
import uArrow from '../../assets/icons/utopia/UTOPIA_ARROW_LEFT.png';

const BackButton = ({ link, theme, white }) => {
    var arrow;
    if (theme === 'dystopia') {
        white ? arrow = dArrowWhite : arrow = dArrow;
    } else {
        arrow = uArrow;
    }
    
    return (
        <div className={`back-button__container--${theme}`}>
            <Link to={link}>
                <img className={`back-arrow--${theme}`} src={arrow} alt={'left arrow'} />
            </Link>
        </div>
    );
}

export { BackButton };