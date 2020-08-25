import React, { useEffect, useState } from 'react';

import { Dialogue } from '../../../common';
import { End } from '../../../landing/pages';

const Page7C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia5C_2.jpg';
    
    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 10000);
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Nice luxury apartment' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: '', message: 'As it were, money truly could buy you happiness for some time. Unfortunately, due to your caretaker’s lack of training, you were one of the less-than-blessed souls to die due to an outbreak of the plague within the hospital 12 days after your arrival.' }
                ]}
            />
            <div className={`page--slow ${activePanel === 2 ? 'active' : ''}`}>
                {activePanel === 2 ? <End /> : null}
            </div>
        </div>
    );
};

export { Page7C };