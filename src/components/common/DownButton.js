import React from 'react';
import { Link } from 'react-router-dom';

import arrow from '../../assets/icons/utopia/UTOPIA_ARROW_DOWN.png';

const DownButton = ({ link }) => {
    
    return (
        <div className='down-button__container'>
            <Link to={link}>
                <img className='down-arrow' src={arrow} alt={'left arrow'} />
            </Link>
        </div>
    );
}

export { DownButton };