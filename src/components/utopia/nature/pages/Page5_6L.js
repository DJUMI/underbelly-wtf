import React, { useContext, useEffect, useState } from 'react';

import { LinkButton } from '../../../common';
import bg1 from '../../../../assets/images/utopia/nature/5L_UTOPIA.jpg'
import bg2 from '../../../../assets/images/utopia/nature/6L_UTOPIA.jpg'
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page5_6L = () => {
    const [activePanel, setActivePanel] = useState(1);
    const [showButton, setShowButton] = useState(false);
    const { playSong } = useContext(AudioContext);

    useEffect(() => {
        playSong('track5L');
        setTimeout(() => {
            setActivePanel(2);
        }, 3000);
        setTimeout(() => {
            setShowButton(true);
        }, 3500);
    }, []);

    const renderButton = () => (
        <LinkButton title='bus' link='/utopia/7L' top='10vh' left='25vw' width='40vw' />
    );

    const render5L = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg1} alt='Old person waiting at the bus stop' />
        </div>
    );

    const render6L = () => (
        <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
            <img className='page__image' src={bg2} alt='Van that has logo "Choose your time"' />
        </div>
    );

    return (
        <div className="page">
            {render5L()}
            {render6L()}
            {showButton ? renderButton() : null}
        </div>
    );
};

export { Page5_6L };