import React, { useContext, useEffect } from 'react';

import { BackButton, LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page3B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia3B.jpg';
    const { startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('track3B');
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Front door of house' />
            <BackButton link='/dystopia/1B' theme='dystopia' />
            <LinkButton title='door' link='/dystopia/3B_1' top='25vh' left='34.5vw' width='30vw'/>
        </div>
    );
};

export { Page3B };