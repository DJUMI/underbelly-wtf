import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../assets/images/landing/LP1.png'

const PageLP1 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Enter' />
            <Link to='/LP2'>
                <div className='clickable LP1__button' />
            </Link>
        </div>
    );
};

export { PageLP1 };