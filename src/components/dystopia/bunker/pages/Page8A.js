import React, { useContext, useEffect } from 'react';

import MapModal from '../modals/MapModal';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page8A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia8A.jpg';
    const { playSong } = useContext(AudioContext);

    useEffect(() => {
        playSong('track9A');
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Map of the bunker district' />
            <MapModal />
        </div>
    );
};

export { Page8A };