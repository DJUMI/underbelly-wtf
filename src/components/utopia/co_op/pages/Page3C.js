import React, { useContext, useEffect } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../.././../../context/AudioContext';

const Page3C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/utopia/co_op/3C_UTOPIA.jpg';
    const { playFX } = useContext(AudioContext);

    useEffect(() => {
        setTimeout(() => {
            playFX('close');
        }, 250);
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Bulletin board' />
            <LinkButton title='bug' link='/utopia/2C' top='54vh' left='80vw' width='10vw'/>
            <LinkButton title='card' link='/utopia/4C' top='62vh' left='39vw' width='10vw'/>
        </div>
    );
};

export { Page3C };