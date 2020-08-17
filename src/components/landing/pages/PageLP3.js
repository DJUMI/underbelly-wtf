import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../assets/images/landing/LP3.png'

const PageLP3 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Enter' />
            <Link to='/LP4'>
                <div className='clickable LP3__button' />
            </Link>
        </div>
    );
};

export { PageLP3 };