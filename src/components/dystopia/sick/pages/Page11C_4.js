import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Dialogue } from '../../../common';
import bg1 from '../../../../assets/images/landing/end.png';

const Page11C_4 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_3.jpg';

    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 10000);
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Female Doctor', message: 'And whatever you do. You must never return to the Hospital District. They will kill you if they find you. Do you understand?' },
                    { speaker: '', message: 'Good.' }
                ]}
            />
            <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
                <img className='page__image' src={bg1} alt='Game Over' />
                <Link to='/LP5'>
                    <div className='LP__text_container--end'>
                        <span className='LP__text'>Try again?</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export { Page11C_4 };