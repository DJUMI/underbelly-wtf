import React from 'react';
import { Link } from 'react-router-dom';

const Page13A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia10A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Cinema' />
            <div className='p13A__svg__container--ipod'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/13A'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page13A };