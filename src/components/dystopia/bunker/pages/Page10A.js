import React from 'react';
import { Link } from 'react-router-dom';

import { Dialogue } from '../../../common';

const Page10A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_2.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Room with bed and computer' />
            <Dialogue
                theme='dystopia'
                bottom={true}
                messages={[
                    { speaker: '* *', message: '“Looks like my dollar bills don’t have any value here. Trade is the currency.”' }
                ]}
            />
            <div className='svg__container--back'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/7A'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page10A };