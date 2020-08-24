import React, { useContext, useEffect } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

import bg from '../../../../assets/images/utopia/co_op/9C1_UTOPIA.jpg'

const Page9C_1A = () => {
    const { playSong } = useContext(AudioContext);

    useEffect(() => {
        playSong('track9C1');
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hallway' />
            <LinkButton title='tomato' link='/utopia/9C_1B' top='55vh' left='64vw' width='10vw' />
        </div>
    );
};

export { Page9C_1A };