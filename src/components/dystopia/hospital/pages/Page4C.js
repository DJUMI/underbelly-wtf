import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/dystopia/hospital/Dystopia4C.jpg'

const Page4C = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <div className='p4C__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/5C_1'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page4C };