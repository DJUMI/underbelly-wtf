import React, { useContext, useEffect, useState } from 'react';

import { LinkButton, OpenButton } from '../../common';
import { Context as AudioContext } from '../../../context/AudioContext';

import glimpse from '../../../assets/images/utopia/nature/3L5_UTOPIA.jpg';

const DystopiaBegin = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/dystopia_start.jpg';
    const { startSong } = useContext(AudioContext);
    const [showGlimpse, setShowGlimpse] = useState(false);
    const [glimpsed, setGlimpsed] = useState(false);

    useEffect(() => {
        startSong('d_start');
    }, []);

    const handleGlimpse = () => {
        setShowGlimpse(true);
        setGlimpsed(true);
        setTimeout(() => {
            setShowGlimpse(false);
        }, 5000)
    }

    return (
        <div className='page'>
            <div className='fade-in--slower'>
                <img className='page__image' src={bg} alt='Creepy Bunker' />
                <img className={`page__image--glimpse ${showGlimpse ? 'active' : ''}`} src={glimpse} alt='glimpse of dystopia' />
                <LinkButton title='comp' link='/dystopia/1A' top='57.25vh' left='58.4vw' width='6vw' />
                <LinkButton title='fence' link='/dystopia/1B' top='37.5vh' left='71.68vw' width='6vw' />
                {glimpsed ? null : <OpenButton title='face' onClick={handleGlimpse} top='67vh' left='92vw' width='10vw' />}
            </div>
        </div>
    );
};

export default DystopiaBegin;
