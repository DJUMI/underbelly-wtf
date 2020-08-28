import React, { useContext, useEffect } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

import bg from '../../../../assets/images/utopia/co_op/5C_UTOPIA.jpg'

const Page5C = () => {
    const { playFX, startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('track5C_U');

        setTimeout(() => {
            playFX('close');
        }, 250)

    }, []);
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hallway' />
            <LinkButton title='living-room' link='/utopia/6CA' top='13vh' left='5vw' width='20vw'/>
        </div>
    );
};

export { Page5C };