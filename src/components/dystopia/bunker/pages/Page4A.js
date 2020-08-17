import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/dystopia/bunker/Dystopia4A.jpg'

const Page4A = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Creepy Bunker with door open to stairs leading inside' />
            <div className='p4A__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/4A_1'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>

            <div className='d-start__svg__container--fence'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/1B'>
                        <polygon className='clickable--svg' points='0,100 50,0 100,100' />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page4A };