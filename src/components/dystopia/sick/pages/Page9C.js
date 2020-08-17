import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/dystopia/sick/Dystopia9C.jpg'

const Page9C = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='View of boarded up house and abandoned car covered in overgrowth' />
            <div className='p9C__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/10C'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page9C };