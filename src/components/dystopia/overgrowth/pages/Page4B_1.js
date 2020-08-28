import React, { useContext, useEffect, useState } from 'react';

import { End } from '../../../landing/pages';
import { Context as AudioContext } from '../../../../context/AudioContext';

const Page4B_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia4B_1.jpg';
    const [activePanel, setActivePanel] = useState(1);
    const { playFX } = useContext(AudioContext);

    useEffect(() => {
        playFX('shot');
        setTimeout(() => setActivePanel(2), 500);
        setTimeout(() => setActivePanel(1), 1000);
        setTimeout(() => setActivePanel(2), 1500);
        setTimeout(() => setActivePanel(1), 2000);
        setTimeout(() => setActivePanel(2), 2500);
        setTimeout(() => setActivePanel(1), 3000);
        setTimeout(() => setActivePanel(3), 3500);
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Woman attacking you with machete' />
            <div className={`page--transition--red ${activePanel === 2 ? 'active' : ''}`} />
            <div className={`page--transition ${activePanel === 3 ? 'active' : ''}`}>
                {activePanel === 3 ? <End /> : null}
            </div>
        </div>
    );
};

export { Page4B_1 };