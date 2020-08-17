import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/nature/2L1_UTOPIA.jpg'
import bg_bubble from '../../../../assets/images/utopia/nature/2L1_UTOPIA_BUBBLE.jpg'

const Page2L_1 = () => {
    const [showBubble, setShowBubble] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        setShowBubble(true);
        setTimeout(() => setShowButton(true), 3000)
    }, []);

    const renderButton = () => (
        <div className='p2L_1__svg__container'>
            <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                <Link to='/utopia/2L_2'>
                    <circle className='clickable--svg' cx="50" cy="50" r="47" />
                </Link>
            </svg>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Person sitting by a pond with two deer' />
            <div className={`page--slow ${showBubble ? 'active' : ''}`}>
                <img className='page__image' src={bg_bubble} alt='Person sitting by a pond with two deer and a thought bubble' />
            </div>
            {showButton ? renderButton() : null}
        </div>
    );
};

export { Page2L_1 };