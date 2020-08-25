import React, { useEffect, useState } from 'react';

import { Dialogue, LinkButton } from '../../../common';
import bg1 from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'
import bg2 from '../../../../assets/images/utopia/hospital/3H_UTOPIA_BUBBLE.jpg'

const Page3H = () => {
    const [showBubble, setShowBubble] = useState(false);

    useEffect(() => {
        setShowBubble(true);
    }, []);

    const renderButton = () => (
        <LinkButton title='doors' link='/utopia/1L' top='15vh' left='73vw' width='20vw' />
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg1} alt='Nurse in Hospital Room' />
            <div className={`page--slow ${showBubble ? 'active' : ''}`}>
                <img className='page__image' src={bg2} alt='Nurse in Hospital Room' />
            </div>
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Nurse', message: 'Good choice, friend. The doctor will send over your post-memory removal information to your companion. If you need a ride home, as always, we are happy to give you a lift.' }
                ]}
            />
            {showBubble ? renderButton() : null}
        </div>
    );
};

export { Page3H };