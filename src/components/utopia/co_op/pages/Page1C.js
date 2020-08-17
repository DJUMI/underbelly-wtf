import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/co_op/1C_UTOPIA.jpg'

const Page1C = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Several houses in a cul de sac' />
            <div className='p1C__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/2C'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page1C };