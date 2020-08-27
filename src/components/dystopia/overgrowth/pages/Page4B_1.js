import React, { useEffect, useState } from 'react';

import { End } from '../../../landing/pages';

const Page4B_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia4B_1.jpg';

    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 7000);
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Woman attacking you with machete' />
            <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
                {activePanel === 2 ? <End /> : null}
            </div>
        </div>
    );
};

export { Page4B_1 };