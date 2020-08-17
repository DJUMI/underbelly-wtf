import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
//import bg from '../../../../assets/images/dystopia/bunker/Dystopia2A.jpg'

const Page2A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia2A.jpg';

    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/3A'>
                <p className='dystopia__text--clickable'>> "I'm not looking for a clinic. I'm just a little confused..."</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Computer Screen' />
            <div className='page__header--screen'>
                <Typed
                    className='utopia__text'
                    strings={['Welcome to the East Side District. Unfortunately, our clinic is currently full and not taking new patients.']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
            <Link to='/dystopia'>
                <div className='clickable dystopia__button--exit' />
            </Link>
        </div>
    );
};

export { Page2A };