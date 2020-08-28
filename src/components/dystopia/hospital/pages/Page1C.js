import React, { useContext, useEffect } from 'react';

import { BackButton, LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page1C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia2C.jpg';
    const { startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('track2C');
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='View of the capitol from state street' />
            <BackButton link='/dystopia/1B' theme='dystopia' white />
            <LinkButton title='capitol' link='/dystopia/1CA' top='33vh' left='46vw' width='10vw'/>
            <LinkButton title='guards' link='/dystopia/2C' top='40vh' left='79.5vw' width='5vw'/>
        </div>
    );
};

export { Page1C };