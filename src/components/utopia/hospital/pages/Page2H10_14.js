import React, { useContext, useEffect, useState } from 'react';

import { Dialogue } from '../../../common';
import { Context as AudioContext } from '../../../../context/AudioContext';

import bg10 from '../../../../assets/images/utopia/hospital/2H10_UTOPIA.jpg'
import bg11 from '../../../../assets/images/utopia/hospital/2H11_UTOPIA.jpg'
import bg12 from '../../../../assets/images/utopia/hospital/2H12_UTOPIA.jpg'
import bg13 from '../../../../assets/images/utopia/hospital/2H13_UTOPIA.jpg'
import bg13_bubble from '../../../../assets/images/utopia/hospital/2H13_UTOPIA_BUBBLE.jpg'
import bg14 from '../../../../assets/images/utopia/hospital/2H14_UTOPIA.jpg'


const Page2H10_14 = () => {
    const [activePanel, setActivePanel] = useState(10);
    const { playSong } = useContext(AudioContext);
    
    useEffect(() => {
        setTimeout(() => {
            setActivePanel(11);
        }, 15000);

        setTimeout(() => {
            setActivePanel(12);
        }, 23000);

        setTimeout(() => {
            setActivePanel(13);
            playSong('track2H13');
        }, 36000);

        setTimeout(() => {
            setActivePanel(14);
        }, 44000);
    }, []);

    const render2H10 = () => (
        <div className={`page--transition ${activePanel === 10 ? 'active' : ''}`}>
            <img className='page__image' src={bg10} alt='Two people staring down at you from above' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Person 1', message: 'Oh gosh! Are you okay, friend? Can you hear us? Stay calm, you were hit pretty hard by our ball.' },
                    { speaker: 'Person 2', message: 'Your companion has already contacted the ambulance, friend. We’ll wait with you until they arrive.' },
                ]}
            />
        </div>
    );

    const render2H11 = () => (
        <div className={`page--transition ${activePanel === 11 ? 'active' : ''}`}>
            <img className='page__image' src={bg11} alt='Companion sending out an alert signal' />
        </div>
    );

    const render2H12 = () => (
        <div className={`page--transition ${activePanel === 12 ? 'active' : ''}`}>
            <img className='page__image' src={bg12} alt='Two people conversing above' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Person 1', message: 'Did you know that ambulances used to cost money?' },
                    { speaker: 'Person 2', message: 'I thought that was a rumor? Why would they charge you for an accident you didn’t cause? And who would pay?' },
                ]}
            />
        </div>
    );

    const render2H13 = () => (
        <div className={`page--transition ${activePanel === 13 ? 'active' : ''}`}>
            <img className='page__image' src={bg13} alt='Memory over' />
            <div className={`page--slow ${activePanel === 13 ? 'active' : ''}`}>
                <img className='page__image' src={bg13_bubble} alt='Memory over and a thought bubble' />
            </div>
        </div>
    );

    const render2H14 = () => (
        <div className={`page--transition ${activePanel === 14 ? 'active' : ''}`}>
            <img className='page__image' src={bg14} alt='Nurse popping head into room' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Nurse', message: 'Still going or all done?' }
                ]}
                responses={[
                    { link: '/utopia/2H15', message: '"It\'s done!"'}
                ]}
            />
        </div>
    );

    return (
        <div className='page'>
            {render2H10()}
            {render2H11()}
            {render2H12()}
            {render2H13()}
            {render2H14()}
        </div>
    );
};

export { Page2H10_14 };