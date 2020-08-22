import React from 'react';
import { Link } from 'react-router-dom';

const Page1A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia1A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Computer Screen' />
            <Link to='/dystopia/2A'>
                <div className='clickable p1A__button--entry' />
            </Link>
            <Link to='/dystopia'>
                <div className='clickable dystopia__button--exit' />
            </Link>
        </div>
    );
};

export { Page1A };