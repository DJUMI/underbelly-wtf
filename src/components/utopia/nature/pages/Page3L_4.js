import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/nature/3L4_UTOPIA.jpg'

const Page3L_4 = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Sitting on bench' />
            <div className='p3L_4__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/3L_5'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page3L_4 };