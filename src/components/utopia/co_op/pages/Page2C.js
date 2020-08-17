import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/co_op/2C_UTOPIA.jpg'

const Page2C = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Co op front door and bulletin board' />
            <div className='p2C__svg__container--board'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/3C'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
            <div className='p2C__svg__container--door'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/5C'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page2C };