import React, { useContext, useEffect } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page5A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia5A.jpg';
    const { startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('track5A');
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            <LinkButton title='bunker' link='/dystopia/5A_A' top='37vh' left='37vw' width='20vw'/>
        </div>
    );
};

export { Page5A };