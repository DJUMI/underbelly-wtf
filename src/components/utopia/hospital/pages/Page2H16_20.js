import React, { useEffect, useState } from 'react';

import { Dialogue, LinkButton } from '../../../common';
import bg16 from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'
import bg17 from '../../../../assets/images/utopia/hospital/2H17_UTOPIA.jpg'
import bg18 from '../../../../assets/images/utopia/hospital/2H18_UTOPIA.jpg'
import bg19 from '../../../../assets/images/utopia/hospital/2H19_UTOPIA.jpg'
import bg19_bubble from '../../../../assets/images/utopia/hospital/2H19_UTOPIA_BUBBLE.jpg'
import bg20_bubble from '../../../../assets/images/utopia/hospital/2H20_UTOPIA_BUBBLE.jpg'

const Page2H16_20 = () => {
    const [activePanel, setActivePanel] = useState(16);
    const [showBubble, setShowBubble] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(17);
        }, 10000);

        setTimeout(() => {
            setActivePanel(18);
        }, 20000);

        setTimeout(() => {
            setActivePanel(19);
        }, 35000);

        setTimeout(() => {
            setActivePanel(20);
        }, 43000);

        setTimeout(() => {
            setShowBubble(true);
        }, 45000);

        setTimeout(() => {
            setShowButton(true);
        }, 49000);
    }, []);

    const render2H16 = () => (
        <div className={`page--transition ${activePanel === 16 ? 'active' : ''}`}>
            <img className='page__image' src={bg16} alt='Nurse in Hospital Room' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Nurse', message: 'If you say so! I will call in the doctor to have her reinsert them. It’s a quick and relatively pain-free process!' }
                ]}
            />
        </div>
    );

    const render2H17 = () => (
        <div className={`page--transition ${activePanel === 17 ? 'active' : ''}`}>
            <img className='page__image' src={bg17} alt='Doctor entering the room' />
            { activePanel === 17 ? <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Doctor', message: 'Hey, friend! So I see you’ve decided to keep the memories. Brave choice.' }
                ]}
            /> : null}
        </div>
    );

    const render2H18 = () => (
        <div className={`page--transition ${activePanel === 18 ? 'active' : ''}`}>
            <img className='page__image' src={bg18} alt='Doctor standing next to you' />
            {activePanel === 18 ? <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Doctor', message: 'The process is non-invasive and takes just a few seconds. I’m going to take your wrist and have the memory inserted through your microchip. You may feel a rush of emotions, that is perfectly normal.' }
                ]}
            /> : null}
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
        <div className={`page--mono ${activePanel === 20 ? 'active' : ''}`}>
            <img className='page__image' src={bg18} alt='Doctor standing next to you' />
            <div className={`page--slow ${showBubble ? 'active' : ''}`}>
                <img className='page__image' src={bg20_bubble} alt='Doctor standing next to you with thought bubble' />
            </div>
            {activePanel === 20 ? <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Doctor', message: 'And done, friend! I’m going to send over some information to your companion now that they can tell you once you’re home safe. If you need a ride home just let the receptionist know as you leave.' }
                ]}
            /> : null}
        </div>
    );

    const renderButton = () => (
        <LinkButton title='doors' link='/utopia/1L' top='15vh' left='73vw' width='20vw' />
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