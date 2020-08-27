import React, { useContext, useEffect } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page9C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C.jpg';
    const { startSong } = useContext(AudioContext);

    useEffect(() => {
        startSong('track9C');
    }, []);
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='View of boarded up house and abandoned car covered in overgrowth' />
            <LinkButton title='capitol-building' link='/dystopia/10C' top='50vh' left='36vw' width='30vw'/>
        </div>
    );
};

export { Page9C };