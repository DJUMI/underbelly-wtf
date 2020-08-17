import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/dystopia/hospital/Dystopia2C.jpg'

const Page1C = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='View of the capitol from state street' />
            <div className='svg__container--back'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/1B'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>

            <div className='p1C__svg__container--guards'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/2C'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page1C };