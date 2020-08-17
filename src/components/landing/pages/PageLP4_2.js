import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../assets/images/landing/LP4_2.png'

const PageLP4_2 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Enter' />
            <Link to='/LP2'>
                <div className='clickable LP4_2__button' />
            </Link>
        </div>
    );
};

export { PageLP4_2 };