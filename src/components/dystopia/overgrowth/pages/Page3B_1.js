import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/dystopia/overgrowth/Dystopia3B.jpg'

const Page3B_1 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Front door of house' />
            <div className='p3B_1__svg__container--knob'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/4B'>
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

export { Page3B_1 };