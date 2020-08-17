import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import bg from '../../../../assets/images/dystopia/hospital/Dystopia4C_1.jpg'

const Page5C_1 = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/5C_2'>
                <p className='dystopia__text--clickable'>> "Ok…?"</p>
            </Link>
            <Link className='text__link' to='/dystopia/1C'>
                <p className='dystopia__text--clickable'>> "I don’t consent to a scan, I’d like to leave."</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <div className='page__footer--dystopia'>
                <Typed
                    className='dystopia__text'
                    strings={['"Welcome to the blesséd Hospital District, praise be. Here, all lives matter. We treat every resident with a private doctor, especially if you contract that dreaded COVID being spread by those Bunker heathens. Please stand still while we scan you."']}
                    typeSpeed={40}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page5C_1 };