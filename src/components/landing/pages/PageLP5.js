import React, { useContext, useEffect } from 'react';

import { SquareButton } from '../../common';
import { Context as AudioContext } from '../../../context/AudioContext';

const PageLP5 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/landing/LP4_2.png'
    const { stopSong } = useContext(AudioContext);

    useEffect(() => {
        stopSong();
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Enter' />
            <div className='LP__text_container'>
                <span className='LP__text'>Welcome to a future.</span>
                <br></br><br></br><br></br>
                <span className='LP__text'>The worlds are intended to be explored. You may have to go through each more than once.</span>
                <br></br><br></br><br></br>
                <span className='LP__text'>In fact, it's encouraged.</span>
                <br></br><br></br><br></br>
                <span className='LP__text'>Best of luck and remember, nothing is exactly as it seems.</span>
                <br></br><br></br><br></br>
            </div>
            <SquareButton link='/utopia' top='88vh' left='26.5vw' height='6.5vh' width='16.5vw' />
            <SquareButton link='/dystopia/begin' top='88vh' left='54.6vw' height='6.5vh' width='22.5vw' />
        </div>
    );
};

export { PageLP5 };