import React, { useContext, useEffect } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page4A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia4A.jpg';
    const { playSong } = useContext(AudioContext);

    useEffect(() => {
        playSong('track1A');
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Creepy Bunker with door open to stairs leading inside' />
            <LinkButton title='bunker' link='/dystopia/4A_1' top='54vh' left='24.5vw' width='10vw'/>
            <LinkButton title='fence' link='/dystopia/1B' top='37.5vh' left='71.68vw' width='6vw'/>
        </div>
    );
};

export { Page4A };