import React from 'react';
import { Link } from 'react-router-dom';

import { MapButton } from '../../../common';

const Page9A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_1.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Computer Screen' />
            <MapButton />
            <div className='p9A__svg__container--sign'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/4A_1'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
            <div className='p9A__svg__container--poster'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/1B'>
                    <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page9A };