import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/hospital/2H8_UTOPIA.jpg'

const Page2H8 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Fully regrown flowers' />
            <div className='p2H6__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/2H9'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page2H8 };