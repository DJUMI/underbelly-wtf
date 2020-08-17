import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import bg from '../../../../assets/images/utopia/co_op/9C2_UTOPIA.jpg'

const Page9C_2B = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/utopia/9C_2C'>
                <p className='utopia__text--clickable'>> Give tomato</p>
            </Link>
            <Link className='text__link' to='/utopia/9C_2A'>
                <p className='utopia__text--clickable'>> "No thank you!"</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hallway' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Need cooking assistance? I got you!"']}
                    typeSpeed={40}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page9C_2B };