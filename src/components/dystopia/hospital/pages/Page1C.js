import React from 'react';
import { Link } from 'react-router-dom';

import { LinkButton } from '../../../common';

//TODO: replace back button
const Page1C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia2C.jpg';

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
            <LinkButton title='guards' link='/dystopia/2C' top='40vh' left='79.5vw' width='5vw'/>
        </div>
    );
};

export { Page1C };