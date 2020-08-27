import React, { useContext, useEffect } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

import bg from '../../../../assets/images/utopia/hospital/2H5_UTOPIA.jpg'

const Page2H5 = () => {
    const { startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('track2H5');
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Sitting in grass with companion' />
            <LinkButton title='flower' link='/utopia/2H6' top='20vh' left='47vw' width='10vw' />
        </div>
    );
};

export { Page2H5 };