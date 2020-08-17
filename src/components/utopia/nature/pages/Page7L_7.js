import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/nature/7L7_UTOPIA.jpg'

const Page7L_7 = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Van that has logo "Choose your time"' />
            <div className='p7L_7__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/7L_8'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page7L_7 };