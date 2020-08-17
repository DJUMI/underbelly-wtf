import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/nature/3L2_UTOPIA.jpg'

//TODO: add inner monologue and link to dystopia

const Page3L_2 = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of squirrel and tree with face in it' />
            <div className='p3L_2__svg__container--face'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/3L_1'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page3L_2 };