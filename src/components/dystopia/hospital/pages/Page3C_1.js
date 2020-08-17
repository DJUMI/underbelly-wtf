import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import bg from '../../../../assets/images/dystopia/hospital/Dystopia3C.jpg'

const Page3C_1 = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/3C_2'>
                <p className='dystopia__text--clickable'>> "Is this the entrance to the Hospital?"</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two armed guards stand near a hospital entrance' />
            <div className='page__footer--dystopia'>
                <Typed
                    className='dystopia__text'
                    strings={['"State your purpose."']}
                    typeSpeed={40}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page3C_1 };