import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/nature/7L2_UTOPIA.jpg'
import bg_bubble from '../../../../assets/images/utopia/nature/7L8_UTOPIA_BUBBLE.jpg'

const Page7L_8 = () => {
    const [showBubble, setShowBubble] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        setShowBubble(true);
        setTimeout(() => setShowButton(true), 3000)
    }, []);

    const renderButton = () => (
        <div className='p7L_8__svg__container'>
            <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                <Link to='/utopia/1L'>
                    <circle className='clickable--svg' cx="50" cy="50" r="47" />
                </Link>
            </svg>
        </div>
    );


    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Waiting room with large tree' />
            <div className={`page--slow ${showBubble ? 'active' : ''}`}>
                <img className='page__image' src={bg_bubble} alt='Waiting room with large tree and a thought bubble' />
            </div>
            <div className='p7L_2__svg__container--poster'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/7L_5'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
            <div className='p7L_2__svg__container--desk'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/7L_3A'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
            <div className='p7L_2__svg__container--tv'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/7L_7'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
            {showButton ? renderButton() : null}
        </div>
    );
};

export { Page7L_8 };