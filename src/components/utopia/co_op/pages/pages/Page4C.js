import React, { useContext, useEffect } from 'react';

import { BackButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page4C = () => {
    const vid = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/videos/KringleCream.mp4';
    const { pauseSong } = useContext(AudioContext);

    useEffect(() => {
        pauseSong();
    }, []);

    return (
        <div className='page'>
            <video autoPlay loop className='page__image' src={vid} />
            <BackButton link='/utopia/3C' theme='utopia' />
        </div>
    );
};

export { Page4C };