import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/nature/7L1_UTOPIA.jpg'

const Page7L_1 = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Medical building' />
            <div className='p7L_1__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/7L_2'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page7L_1 };