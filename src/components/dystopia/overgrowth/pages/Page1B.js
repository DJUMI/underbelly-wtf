import React, { useContext, useEffect } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page1B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia1B.jpg';
    const { playSong } = useContext(AudioContext);

    useEffect(() => {
        playSong('track1B');
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='View of boarded up house and abandoned car covered in overgrowth' />
            <LinkButton title='house' link='/dystopia/3B' top='29vh' left='41.5vw' width='10vw'/>
            <LinkButton title='car' link='/dystopia/2B' top='15vh' left='65vw' width='20vw'/>
            <LinkButton title='sign' link='/dystopia/1C' top='11vh' left='83.5vw' width='10vw'/>
        </div>
    );
};

export { Page1B };