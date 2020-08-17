import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/co_op/9C4_UTOPIA.jpg'
import bg_bubble from '../../../../assets/images/utopia/co_op/9C4_UTOPIA_BUBBLE.jpg'

const Page9C_4 = () => {
    const [showBubble, setShowBubble] = useState(false);

    useEffect(() => {
        setShowBubble(true);
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Bedroom' />
            <div className={`page--slow ${showBubble ? 'active' : ''}`}>
                <img className='page__image' src={bg_bubble} alt='Bedroom and a thought bubble' />
            </div>
            <div className='p9C_3__svg__container--bed'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/9C5_7'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
            <div className='p9C_3__svg__container--controller'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page9C_4 };