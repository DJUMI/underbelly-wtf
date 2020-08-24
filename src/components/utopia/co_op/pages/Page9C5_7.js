import React, { useContext, useEffect, useState } from 'react';

import { LinkButton } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';
import bg1 from '../../../../assets/images/utopia/co_op/9C5_UTOPIA.jpg'
import bg2 from '../../../../assets/images/utopia/co_op/9C6_UTOPIA.jpg'
import bg3 from '../../../../assets/images/utopia/co_op/9C7_UTOPIA.jpg'

const Page9C5_7 = () => {
    const [activePanel, setActivePanel] = useState(1);

    const { playSong } = useContext(AudioContext);

    useEffect(() => {
        playSong('track9C5');
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 20000);

        setTimeout(() => {
            setActivePanel(3);
        }, 30000);
    }, []);

    const renderButton = () => (
        <LinkButton title='thought' link='/utopia/10C' top='5vh' left='40vw' width='40vw' />
    );

    const render9C_5 = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg1} alt='Laying in bed with companion by your feet' />
        </div>
    );

    const render9C_6 = () => (
        <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
            <img className='page__image' src={bg2} alt='Eyes starting to close' />
        </div>
    );

    const render9C_7 = () => (
        <div className={`page--transition ${activePanel === 3 ? 'active' : ''}`}>
            <img className='page__image' src={bg3} alt='Nothing we can do' />
        </div>
    );

    return (
        <div className='page'>
            {render9C_5()}
            {render9C_6()}
            {render9C_7()}
            {activePanel === 3 ? renderButton() : null}
        </div>
    );
};

export { Page9C5_7 };