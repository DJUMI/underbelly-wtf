import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../assets/images/utopia/hospital/1H_UTOPIA.jpg'

const UtopiaStart = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital Room' />
            <div className='u_start__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/2HA'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                        {/* <polygon className='clickable--svg' points='2,100 24,8 80,5 99,100' /> */}
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export default UtopiaStart;