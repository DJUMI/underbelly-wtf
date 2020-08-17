import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/co_op/7C_UTOPIA.jpg'

const Page7C = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Looking down at your gown' />
            <div className='page__header--utopia'>
                <div className='fade-in'>
                    <Link className='text__link' to='/utopia/8C'>
                        <p className='utopia__text--clickable'>> "I think I look good in it!"</p>
                    </Link>
                    <Link className='text__link' to='/utopia/8C'>
                        <p className='utopia__text--clickable'>> "Yeah.. I forgot I was wearing it."</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export { Page7C };