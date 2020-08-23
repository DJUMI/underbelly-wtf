import React from 'react';
import { Link } from 'react-router-dom';

import { LinkButton } from '../../../common';

//TODO: replace back button
const Page3B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia3B.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Front door of house' />
            <LinkButton title='door' link='/dystopia/3B_1' top='25vh' left='34.5vw' width='30vw'/>
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