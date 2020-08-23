import React from 'react';
import { Link } from 'react-router-dom';

import { LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/7L_UTOPIA.jpg'

//TODO: replace back button
const Page7L = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Van leaving with old man' />
            <div className='svg__container--back'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/1L'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
            <LinkButton title='bus' link='/utopia/7L_1' top='19vh' left='76vw' width='30vw' />
        </div>
    );
};

export { Page7L };