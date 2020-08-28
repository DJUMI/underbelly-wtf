import React, { useEffect, useState } from 'react';

import { LinkButton } from '../../../common';
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
            <LinkButton title='bed' link='/utopia/9C5_7' top='15vh' left='5vw' width='30vw' />
            <LinkButton title='controller' link='/utopia/9C_4A' top='34vh' left='58.5vw' width='10vw' />
        </div>
    );
};

export { Page9C_4 };