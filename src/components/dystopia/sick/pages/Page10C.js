import React, { useContext, useEffect } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page10C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_1.jpg';
    const { startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('track10C');
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='View of boarded up house and abandoned car covered in overgrowth' />
            <LinkButton link='/dystopia/11C_5' theme='dystopia' top='54vh' left='0vw' width='10vw' />
            <LinkButton title='doctor' link='/dystopia/11C' top='35vh' left='40vw' width='20vw'/>
        </div>
    );
};

export { Page10C };