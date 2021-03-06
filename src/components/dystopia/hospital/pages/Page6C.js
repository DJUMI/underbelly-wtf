import React, { useEffect, useState } from 'react';

import { Dialogue, EndDialogue } from '../../../common';
import { End } from '../../../landing/pages';

const Page6C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_1.jpg';
    const bg1 = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia5C_1.jpg';

    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 10000);
    }, []);

    const render6C_1 = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg} alt='Nurse in Hospital Room' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Nurse', message: 'Praise Him for you are truly Blessed! I will remove the funds from your account immediately, please come in straight away!' },
                ]}
            />
        </div>
    );

    const render6C_2 = () => (
        <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
            <img className='page__image' src={bg1} alt='Hospital reception desk' />
            <EndDialogue
                theme='dystopia'
                bottom
                startDelay={11000}
                buttonPress={() => setActivePanel(3)}
                messages={[
                    { speaker: '', message: 'After only a week of training, which consisted of memorizing prayers, you are purchased by one of the residents. Your duties are to now care for your Blessed resident for the rest of your time in the District.' }
                ]}
            />
        </div>
    );

    const renderEnd = () => (
        <div className={`page--transition ${activePanel === 3 ? 'active' : ''}`}>
            {activePanel === 3 ? <End /> : null}
        </div>
    );

    return (
        <div className='page'>
            {render6C_1()}
            {render6C_2()}
            {renderEnd()}
        </div>
    );
};

export { Page6C };