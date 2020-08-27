import React, { useContext, useEffect } from 'react';

import { BackButton, Dialogue } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page1CA = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C.jpg';
    const { startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('track9C');
    }, []);
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='capitol building' />
            <BackButton link='/dystopia/1C' theme='dystopia'/>
            <Dialogue 
                theme='dystopia'
                bottom
                startDelay={0}
                messages={[
                    { message: '"Yikes. This is the Sick District? Definitely doesn\'t look like a place for healing... I shouldn\'t be here."' }
                ]}
            />
        </div>
    );
};

export { Page1CA };