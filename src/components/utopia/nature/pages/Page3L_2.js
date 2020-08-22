import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/nature/3L2_UTOPIA.jpg'
import bg_bubble from '../../../../assets/images/utopia/nature/3L2_UTOPIA_BUBBLE.jpg'

const Page3L_2 = () => {
    const [showBubble, setShowBubble] = useState(false);

    useEffect(() => {
        setShowBubble(true);
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of squirrel and tree with face in it' />
            <div className={`page--slow ${showBubble ? 'active' : ''}`}>
                <img className='page__image' src={bg_bubble} alt='Close up of deer with camera for an eye and a thought bubble' />
            </div>
            <div className='p3L_2__svg__container--face'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/utopia/3L_1'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page3L_2 };