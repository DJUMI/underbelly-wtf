import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../assets/images/landing/LP2.png'

const PageLP2 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Please enter access code' />
            <Link to='/LP3'>
                <div className='clickable LP1__button' />
            </Link>
        </div>
    );
};

export { PageLP2 };