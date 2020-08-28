import React, { useEffect, useState } from 'react';

import { Dialogue } from '../../../common';
import { End } from '../../../landing/pages';
import bg1 from '../../../../assets/images/utopia/co_op/10C_UTOPIA.jpg'
import bg2 from '../../../../assets/images/utopia/co_op/11C_UTOPIA.jpg'

const Page10C = () => {
    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 17000);

        setTimeout(() => {
            setActivePanel(3);
        }, 40000);

        setTimeout(() => {
            setActivePanel(4);
        }, 62000);
    }, []);

    const render10C = () => (
        <div className='fade-in--slower'>
            <div className={`page--lazy ${activePanel === 1 ? 'active' : ''}`}>
                <img className='page__image' src={bg1} alt='Hospital room' />
                <Dialogue
                    theme='utopia'
                    startDelay={7000}
                    messages={[
                        { speaker: 'Doctor', message: 'I don’t think they’re going to wake up, it’s time to call Choose Your Time. How many does that make today?' },
                        { speaker: 'Nurse', message: 'Seven.' }
                    ]}
                />
            </div>
        </div>
    );

    const render10CA = () => (
        <div className='fade-in--slower'>
            <div className={`page--lazy ${activePanel === 2 ? 'active' : ''}`}>
                <img className='page__image' src={bg1} alt='Hospital room' />
                <Dialogue
                    theme='utopia'
                    startDelay={20000}
                    messages={[
                        { speaker: 'Doctor', message: 'We knew this was going to be a risk of the Giant Purge. It’s still better for the collective.' },
                        { speaker: 'Nurse', message: 'I know friend. I’ll call them right now. Their ID says they’re approved to be a donor and a candidate for Tree Transformation.' }
                    ]}
                />
            </div>
        </div>
    );

    const render11C = () => (
        <div className={`page--lazy ${activePanel === 3 ? 'active' : ''}`}>
            <img className='page__image' src={bg2} alt='Big tree' />
        </div>
    );

    const render12C = () => (
        <div className={`page--slow ${activePanel === 4 ? 'active' : ''}`}>
            {activePanel === 4 ? <End /> : null}
        </div>
    );

    return (
        <div className='page'>
            {render10C()}
            {render10CA()}
            {render11C()}
            {render12C()}
        </div>
    );
};

export { Page10C };