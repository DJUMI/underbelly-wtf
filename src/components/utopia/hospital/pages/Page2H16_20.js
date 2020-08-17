import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import bg16 from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'
import bg17 from '../../../../assets/images/utopia/hospital/2H17_UTOPIA.jpg'
import bg18 from '../../../../assets/images/utopia/hospital/2H18_UTOPIA.jpg'
import bg19 from '../../../../assets/images/utopia/hospital/2H19_UTOPIA.jpg'
import bg19_bubble from '../../../../assets/images/utopia/hospital/2H19_UTOPIA_BUBBLE.jpg'
import bg20_bubble from '../../../../assets/images/utopia/hospital/2H20_UTOPIA_BUBBLE.jpg'

const Page2H16_20 = () => {
    const [activePanel, setActivePanel] = useState(16);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(17);
        }, 8000);

        setTimeout(() => {
            setActivePanel(18);
        }, 20000);

        setTimeout(() => {
            setActivePanel(19);
        }, 32000);

        setTimeout(() => {
            setActivePanel(20);
        }, 43000);
    }, []);

    const render2H16 = () => (
        <div className={`page--transition ${activePanel === 16 ? 'active' : ''}`}>
            <img className='page__image' src={bg16} alt='Nurse in Hospital Room' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Wonderful. I will call in the doctor to have her reinsert it. It\'s a very quick process!"']}
                    typeSpeed={40}
                    showCursor={false}
                />
            </div>
        </div>
    );

    const render2H17 = () => (
        <div className={`page--transition ${activePanel === 17 ? 'active' : ''}`}>
            <img className='page__image' src={bg17} alt='Doctor entering the room' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Hey friend! So you decided to keep the memory. The process is non invasive and takes just a few seconds."']}
                    typeSpeed={40}
                    showCursor={false}
                    startDelay={9000}
                />
            </div>
        </div>
    );

    const render2H18 = () => (
        <div className={`page--transition ${activePanel === 18 ? 'active' : ''}`}>
            <img className='page__image' src={bg18} alt='Doctor standing next to you' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"I\'m just going to take your wrist and have the memory inserted through your microchip."']}
                    typeSpeed={40}
                    showCursor={false}
                    startDelay={21000}
                />
            </div>
        </div>
    );

    const render2H19 = () => (
        <div className={`page--mono ${activePanel === 19 ? 'active' : ''}`}>
            <img className='page__image' src={bg19} alt='Wire being inserted in forearm' />
            <div className={`page--slow ${activePanel === 19 ? 'active' : ''}`}>
                <img className='page__image' src={bg19_bubble} alt='Wire being inserted in forearm with thought bubble' />
            </div>
        </div>
    );

    const render2H20 = () => (
        <div className={`page--transition ${activePanel === 20 ? 'active' : ''}`}>
            <img className='page__image' src={bg18} alt='Doctor standing next to you' />
            <div className={`page--slow ${showButton ? 'active' : ''}`}>
                <img className='page__image' src={bg20_bubble} alt='Doctor standing next to you with thought bubble' />
            </div>
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"All set! I\'m going to send over some information to your companion so they can tell it to you once you\'re home. If you\'d like a ride home just let the receptionist know!"']}
                    typeSpeed={40}
                    showCursor={false}
                    startDelay={41000}
                    onComplete={() => { setShowButton(true) }}
                />
            </div>
        </div>
    );

    const renderButton = () => (
        <div className='p3H__svg__container'>
            <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                <Link to='/utopia/1L'>
                    <circle className='clickable--svg' cx="50" cy="50" r="47" />
                </Link>
            </svg>
        </div>
    );

    return (
        <div className='page'>
            {render2H16()}
            {render2H17()}
            {render2H18()}
            {render2H19()}
            {render2H20()}
            {showButton ? renderButton() : null}
        </div>
    );
};

export { Page2H16_20 };