import React, { useEffect, useState } from 'react';

import { Dialogue } from '../../../common';
import { End } from '../../../landing/pages';
import bg1 from '../../../../assets/images/utopia/co_op/10C_UTOPIA.jpg'
import bg2 from '../../../../assets/images/utopia/co_op/11C_UTOPIA.jpg'

const Page10C = () => {
    const [activePanel, setActivePanel] = useState(3);
    const [showDialogue, setShowDialogue] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowDialogue(true);
        }, 10000);

        setTimeout(() => {
            setActivePanel(3);
        }, 25000);

        setTimeout(() => {
            setActivePanel(3);
        }, 40000);
    }, []);

    const renderDialogue = () => (
        <Dialogue
            theme='utopia'
            messages={[
                { speaker: 'Nurse', message: 'We knew this was going to be a risk of the Giant Purge. It’s still better for the collective.' },
                { speaker: 'Doctor', message: 'I know friend. I’ll call them right now. Their ID says they’re approved to be a donor and a candidate for Tree Transformation' }
            ]}
        />
    );

    const render10C = () => (
        <div className='fade-in--slower'>
            <div className={`page--lazy ${activePanel === 1 ? 'active' : ''}`}>
                <img className='page__image' src={bg1} alt='Hospital room' />
                {showDialogue ? renderDialogue() : null}
            </div>
        </div>
    );

    const render11C = () => (
        <div className={`page--lazy ${activePanel === 2 ? 'active' : ''}`}>
            <img className='page__image' src={bg2} alt='Big tree' />
        </div>
    );

    const render12C = () => (
        <div className={`page--slow ${activePanel === 3 ? 'active' : ''}`}>
            {activePanel === 3 ? <End /> : null}
        </div>
    );

    return (
        <div className='page'>
            {render10C()}
            {render11C()}
            {render12C()}
        </div>
    );
};

export { Page10C };