import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Dialogue } from '../../../common';
import end from '../../../../assets/images/landing/end.png';

const Page6C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_1.jpg';
    const bg1 = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia5C_1.jpg';

    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 10000);

        setTimeout(() => {
            setActivePanel(3);
        }, 20000);
    }, []);

    const render6C_1 = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg} alt='Nurse in Hospital Room' />
            <Dialogue
                theme='utopia'
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
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: '', message: 'After only a week of training, which consisted of memorizing prayers, you are purchased by one of the residents. Your duties are to now care for your Blessed resident for the rest of your time in the District.' }
                ]}
            />
        </div>
    );

    const renderEnd = () => (
        <div className={`page--transition ${activePanel === 3 ? 'active' : ''}`}>
                <img className='page__image' src={end} alt='Game Over' />
                <Link to='/LP4'>
                    <div className='LP__text_container--end'>
                        <span className='LP__text'>Try again?</span>
                    </div>
                </Link>
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