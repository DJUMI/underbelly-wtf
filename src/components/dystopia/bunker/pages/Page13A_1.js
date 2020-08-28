import React, { useContext, useEffect, useState } from 'react';

import { BackButton, Dialogue, PauseButton, PlayButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page13A_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia13A_1.jpg';
    const [showTitle, setShowTitle] = useState(true);
    const [showPlay, setShowPlay] = useState(false);
    const { stopSong, startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('get_through')
    }, [])

    const renderTitle = () => (
        <Dialogue
            theme='dystopia'
            bottom
            short
            startDelay={0}
            messages={[
                { message: 'Now Playing: Dudley Noon - I\'ll Get Through This' }
            ]}
        />
    );
    const renderButtons = () => {
        if (showPlay) {
            return (
                <PlayButton
                    onClick={() => {
                        setShowTitle(true);
                        setShowPlay(false);
                    }}
                    track='get_through'
                    top='46vh'
                    left='28vw'
                    width='10vw'
                />
            );
        }
        return (
            <PauseButton
                onClick={() => {
                    setShowTitle(false);
                    setShowPlay(true);
                }}
                top='46vh'
                left='28vw'
                width='10vw'
            />
        );
    }

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='ipod' />
            {renderButtons()}
            <BackButton link='/dystopia/13A' onClick={stopSong} theme='dystopia' />
            {showTitle ? renderTitle() : null}
        </div>
    );
};

export { Page13A_1 };