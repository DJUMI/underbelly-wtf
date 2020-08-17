import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/hospital/2H6_UTOPIA.jpg'

const Page2H6 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Picking a flower' />
            <div className='p2H6__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/2H7'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page2H6 };