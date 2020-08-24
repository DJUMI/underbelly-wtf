import React from 'react';

import { BackButton } from '../../../common';

//TODO: play song
const Page4C = () => {
    const vid = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/videos/KringleCream.mp4';

    return (
        <div className='page'>
            <video autoPlay loop muted className='page__image' src={vid} />
            <BackButton link='/utopia/3C' theme='utopia' />
        </div>
    );
};

export { Page4C };