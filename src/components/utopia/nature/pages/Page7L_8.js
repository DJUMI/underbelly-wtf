import React, { useContext, useEffect, useState } from 'react';

import { DownButton, LinkButton } from '../../../common';
import { Context as PlayerContext } from '../../../../context/PlayerContext';
import bg from '../../../../assets/images/utopia/nature/7L2_UTOPIA.jpg'
import bg_bubble from '../../../../assets/images/utopia/nature/7L8_UTOPIA_BUBBLE.jpg'

const Page7L_8 = () => {
    const [showBubble, setShowBubble] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const { getChoose } = useContext(PlayerContext);

    useEffect(() => {
        getChoose();
        setShowBubble(true);
        setTimeout(() => setShowButton(true), 3000)
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Waiting room with large tree' />
            <div className={`page--slow ${showBubble ? 'active' : ''}`}>
                <img className='page__image' src={bg_bubble} alt='Waiting room with large tree and a thought bubble' />
            </div>
            <LinkButton title='poster' link='/utopia/7L_5' top='27vh' left='9vw' width='10vw' />
            <LinkButton title='desk' link='/utopia/7L_3A' top='35vh' left='46vw' width='20vw' />
            <LinkButton title='tv' link='/utopia/7L_7' top='11vh' left='61.5vw' width='10vw' />
            {showButton ? <DownButton link='/utopia/1L' /> : null}
        </div>
    );
};

export { Page7L_8 };