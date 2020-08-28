import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context as AudioContext } from '../../../../context/AudioContext';

const Page1A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia1A.jpg';
    const { startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('track1A');
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Computer Screen' />
            <Link to='/dystopia/2A'>
                <div className='clickable p1A__button--entry' />
            </Link>
            <Link to='/dystopia'>
                <div className='clickable dystopia__button--exit' />
            </Link>
        </div>
    );
};

export { Page1A };