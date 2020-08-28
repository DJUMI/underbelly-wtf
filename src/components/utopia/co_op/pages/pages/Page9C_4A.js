import React, { useContext } from 'react';

import { BackButton, LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page9C_4A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/utopia/co_op/9C_4A.jpg';
    const { playFX } = useContext(AudioContext);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Bedroom' />
            <BackButton link='/utopia/9C_4' theme='utopia' />
            <LinkButton title='start' onClick={() => playFX('to_dystopia')} link='/dystopia' top='30vh' left='40vw' width='20vw' />
        </div>
    );
};

export { Page9C_4A };