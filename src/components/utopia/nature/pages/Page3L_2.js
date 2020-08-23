import React, { useEffect, useState } from 'react';

import { LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/3L2_UTOPIA.jpg'
import bg_bubble from '../../../../assets/images/utopia/nature/3L2_UTOPIA_BUBBLE.jpg'

//TODO: show glimpse of dystopia
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
            <LinkButton title='face' link='/utopia/3L_1' top='34vh' left='38vw' width='10vw' />
        </div>
    );
};

export { Page3L_2 };