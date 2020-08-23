import React, { useEffect, useState } from 'react';

import { LinkButton } from '../../../common';
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
        <LinkButton title='deer' link='/utopia/2L_2' top='29vh' left='41vw' width='20vw' />
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