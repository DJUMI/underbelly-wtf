import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { EndDialogue } from '../../../common';
import { End } from '../../../landing/pages';
import bg1 from '../../../../assets/images/landing/end.png';

const Page11C_4 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_3.jpg';

    const [activePanel, setActivePanel] = useState(1);

    const renderEnd = () => (
        <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
            {activePanel === 2 ? <End /> : null}
        </div>
    );

    const renderContent = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <EndDialogue
                theme='dystopia'
                bottom
                buttonPress={() => setActivePanel(2)}
                messages={[
                    { speaker: 'Doctor', message: 'And whatever you do. You must never return to the Hospital District. They will kill you if they find you. Do you understand?' },
                    { speaker: '', message: 'Good.' }
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

export { Page11C_4 };