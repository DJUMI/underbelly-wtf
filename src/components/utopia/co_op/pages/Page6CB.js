import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import bg from '../../../../assets/images/utopia/co_op/6C_UTOPIA_FACECHANGE.jpg'

const Page6CB = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/utopia/6CC'>
                <p className='utopia__text--clickable'>> "I think I’m good! I lost the flowers I was picking though :("</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two people sitting in a living room' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Hey! How\'s your head? Our companions told us you got injured pretty bad."']}
                    typeSpeed={40}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page6CB };