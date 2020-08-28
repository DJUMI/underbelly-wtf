import React, { useContext, useEffect } from 'react';

import { BackButton, LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';
import { Context as PlayerContext } from '../../../../context/PlayerContext';

const Page1B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia1B.jpg';
    const { startSong } = useContext(AudioContext);
    const { state } = useContext(PlayerContext);

    useEffect(() => {
        startSong('track1B');
    }, []);

    const renderHouse = () => {
        if (state.hasHouse) {
            return null;
        } else if (state.hasCrash) {
            return <LinkButton title='house' link='/dystopia/3B_1' top='29vh' left='41.5vw' width='10vw'/>
        }

        return <LinkButton title='house' link='/dystopia/3B' top='29vh' left='41.5vw' width='10vw'/>
    };

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='View of boarded up house and abandoned car covered in overgrowth' />
            {state.hasBunker ? <BackButton link='/dystopia/4A' theme='dystopia' white /> : <BackButton link='/dystopia' theme='dystopia' white />}
            {renderHouse()}
            <LinkButton title='car' link='/dystopia/2B' top='15vh' left='65vw' width='20vw'/>
            <LinkButton title='sign' link='/dystopia/1C' top='11vh' left='83.5vw' width='10vw'/>
        </div>
    );
};

export { Page1B };