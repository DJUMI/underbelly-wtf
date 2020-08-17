import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import bg from '../../../../assets/images/dystopia/hospital/Dystopia3C.jpg'

const Page3C_3 = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/3C_4'>
                <p className='dystopia__text--clickable'>> "Oh. Okay, if it’s a district does that mean this is a shelter?"</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two armed guards stand near a hospital entrance' />
            <div className='page__footer--dystopia'>
                <Typed
                    className='dystopia__text'
                    strings={['"Have you been living under a f*cking rock? The military was disbanded years ago, when the country had to shut down because of The Second Wave. I used to be a f*cking Marine before this sh*t. I’m Police, now. Hoo rah…"']}
                    typeSpeed={40}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page3C_3 };