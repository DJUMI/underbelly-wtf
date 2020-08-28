import React, { useState } from 'react';

import { EndDialogue } from '../../../common';
import { End } from '../../../landing/pages';

const Page12C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_4.jpg';
    const [activePanel, setActivePanel] = useState(1);

    const renderEnd = () => (
        <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
            {activePanel === 2 ? <End /> : null}
        </div>
    );

    const renderContent = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <EndDialogue
                theme='dystopia'
                bottom
                buttonPress={() => setActivePanel(2)}

                messages={[
                    { speaker: 'Doctor', message: 'I’m so sorry to hear that, but for the future and safety of this community, you cannot leave.' }
                ]}
            />
        </div>
    );


    return (
        <div className='page'>
            {renderContent()}
            {renderEnd()}
        </div>
    );
};

export { Page12C };