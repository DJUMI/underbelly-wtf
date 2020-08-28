import React, { useContext, useEffect } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

import bg from '../../../../assets/images/utopia/co_op/1C_UTOPIA.jpg'

const Page1C = () => {
    const { startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('track1C');
    }, []);
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Several houses in a cul de sac' />
            <LinkButton title='house' link='/utopia/2C' top='40vh' left='45vw' width='20vw'/>
        </div>
    );
};

export { Page1C };