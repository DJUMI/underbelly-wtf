import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/co_op/9C1_UTOPIA_TOMATO.jpg'

const Page9C_1B = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hallway' />
            <div className='p9C_1B__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/9C_tom'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page9C_1B };