import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/dystopia/bunker/Dystopia4A_1.jpg'

const Page4A_1 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <div className='p4A_1__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/5A'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page4A_1 };