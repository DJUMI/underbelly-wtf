import React from 'react';
import { Link } from 'react-router-dom';

const PageLP2 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/landing/LP2.png';

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