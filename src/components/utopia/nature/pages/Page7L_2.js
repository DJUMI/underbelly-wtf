import React, { useContext, useEffect } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

import bg from '../../../../assets/images/utopia/nature/7L2_UTOPIA.jpg'

const Page7L_2 = () => {
    const { startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('track7L2');
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Waiting room with large tree' />
            <LinkButton title='poster' link='/utopia/7L_5' top='27vh' left='9vw' width='10vw' />
            <LinkButton title='desk' link='/utopia/7L_3A' top='35vh' left='46vw' width='20vw' />
            <LinkButton title='tv' link='/utopia/7L_7' top='11vh' left='61.5vw' width='10vw' />
        </div>
    );
};

export { Page7L_2 };