import React from 'react';
import { Link } from 'react-router-dom';

import { Dialogue } from '../../../common';

const Page4B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia4B.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two armed women looting a house' />
            <Dialogue
                theme='dystopia'
                bottom
                responses={[
                    { link: '/dystopia/5B', message: '“Ope, Sorry”' }
                ]}
            />
            <div className='p4B__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/4B_1'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page4B };