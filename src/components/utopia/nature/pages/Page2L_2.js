import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/nature/2L2_UTOPIA.jpg'
import bg_bubble from '../../../../assets/images/utopia/nature/2L2_UTOPIA_BUBBLE.jpg'

const Page2L_2 = () => {
    const [showBubble, setShowBubble] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        setShowBubble(true);
        setTimeout(() => setShowButton(true), 3000)
    }, []);

    const renderButton = () => (
        <div className='svg__container--back'>
            <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                <Link to='/utopia/1L'>
                    <circle className='clickable--svg' cx="50" cy="50" r="47" />
                </Link>
            </svg>
        </div>
    );


    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of deer with camera for an eye' />
            <div className={`page--slow ${showBubble ? 'active' : ''}`}>
                <img className='page__image' src={bg_bubble} alt='Close up of deer with camera for an eye and a thought bubble' />
            </div>
            {showButton ? renderButton() : null}
        </div>
    );
};

export { Page2L_2 };