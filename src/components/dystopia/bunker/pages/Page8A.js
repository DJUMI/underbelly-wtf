import React, { useContext, useEffect } from 'react';

import MapModal from '../modals/MapModal';
import { Context as AudioContext } from '../../../../context/AudioContext';
import { Context as PlayerContext } from '../../../../context/PlayerContext';

const Page8A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia8A.jpg';
    const { startSong } = useContext(AudioContext);
    const { getMap } = useContext(PlayerContext);

    useEffect(() => {
        startSong('track9A');
        getMap();
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Map of the bunker district' />
            <MapModal />
        </div>
    );
};

export { Page8A };