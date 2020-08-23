import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Dialogue } from '../../../common';
import bg1 from '../../../../assets/images/landing/end.png';

const Page12C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_4.jpg';

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
                    { speaker: 'Doctor', message: 'I’m so sorry to hear that, but for the future and safety of this community, you cannot leave.' }
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

export { Page12C };