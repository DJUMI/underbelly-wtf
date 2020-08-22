import React from 'react';
import { Link } from 'react-router-dom';

const PageLP1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/landing/LP1.png';

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