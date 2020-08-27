import React, { useContext, useEffect } from 'react';

import { BackButton, LinkButton } from '../../../common';
import { CrashModal } from '../modals';
import { Context as AudioContext } from '../../../../context/AudioContext';
import { Context as PlayerContext } from '../../../../context/PlayerContext';

const Page3B_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia3B.jpg';
    const { playFX } = useContext(AudioContext);
    const { state, getCrash } = useContext(PlayerContext);

    useEffect(() => {
        playFX('crash');
        setTimeout(() => {
            getCrash();
        }, 2000)
    },[])

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Front door of house' />
            {state.hasCrash ? null : <CrashModal />}
            <BackButton link='/dystopia/1B' theme='dystopia' />
            <LinkButton title='knob' link='/dystopia/4B' color='red' top='74vh' left='56vw' width='10vw'/>
        </div>
    );
};

export { Page3B_1 };