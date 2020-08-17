import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/nature/4L_UTOPIA.jpg'

const Page4L = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Old person walking to a bus stop' />
            <div className='p4L__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/5_6L'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page4L };