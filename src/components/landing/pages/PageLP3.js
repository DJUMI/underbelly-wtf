import React from 'react';
import { Link } from 'react-router-dom';

const PageLP3 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/landing/LP3.png';

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