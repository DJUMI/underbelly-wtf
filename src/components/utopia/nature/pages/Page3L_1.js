import React, { useContext, useEffect } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

import bg from '../../../../assets/images/utopia/nature/3L1_UTOPIA.jpg'

const Page3L_1 = () => {
    const { startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('track3L');
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Bench by several tall trees' />
            <LinkButton title='tree' link='/utopia/3L_2' top='40vh' left='38vw' width='10vw' />
            <LinkButton title='bench' link='/utopia/3L_4' top='58vh' left='50vw' width='20vw' />
            <LinkButton title='egg' link='/utopia/3L_1_squirrel' top='10vh' left='58vw' width='10vw' />
        </div>
    );
};

export { Page3L_1 };