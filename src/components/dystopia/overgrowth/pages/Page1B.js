import React from 'react';
import { Link } from 'react-router-dom';

const Page1B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia1B.jpg';
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='View of boarded up house and abandoned car covered in overgrowth' />
            <div className='p1B__svg__container--house'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/3B'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
            <div className='p1B__svg__container--car'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/2B'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
            <div className='p1B__svg__container--sign'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/1C'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page1B };