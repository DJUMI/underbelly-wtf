import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/dystopia/overgrowth/Dystopia3B.jpg'

const Page3B = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Front door of house' />
            <div className='p3B__svg__container--door'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/3B_1'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
            <div className='svg__container--back'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/1B'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page3B };