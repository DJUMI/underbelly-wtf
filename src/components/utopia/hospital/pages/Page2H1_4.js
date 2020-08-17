import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
import bg1 from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'
import bg2 from '../../../../assets/images/utopia/hospital/2H2_UTOPIA.jpg'
import bg3 from '../../../../assets/images/utopia/hospital/2H3_UTOPIA.jpg'
import bg4 from '../../../../assets/images/utopia/hospital/2H4_UTOPIA.jpg'

const Page2H1_4 = () => {
    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 5000);

        setTimeout(() => {
            setActivePanel(3);
        }, 10000);

        setTimeout(() => {
            setActivePanel(4);
        }, 20000);
    }, []);

    const render2H1 = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg1} alt='Nurse in Hospital Room' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Great! Let me set it up for you."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                />
            </div>
        </div>
    );

    const render2H2 = () => (
        <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
            <img className='page__image' src={bg2} alt='Nurse inserting video into tv' />
        </div>
    );

    const render2H3 = () => (
        <div className={`page--transition ${activePanel === 3 ? 'active' : ''}`}>
            <img className='page__image' src={bg3} alt='Nurse exiting the room' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Alright, I\'ll be right outside the room. Click start on the remote whenever you\'re ready."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    startDelay={12000}
                />
            </div>
        </div>
    );

    const render2H4 = () => (
        <div className={`page--transition ${activePanel === 4 ? 'active' : ''}`}>
            <img className='page__image' src={bg4} alt='TV remote' />
        </div>
    );

    const renderButton = () => (
        <div className='p2H4__svg__container'>
            <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                <Link to='/utopia/2H5'>
                    <circle className='clickable--svg' cx="50" cy="50" r="47" />
                </Link>
            </svg>
        </div>
    );



    return (
        <div className='page'>
            {render2H1()}
            {render2H2()}
            {render2H3()}
            {render2H4()}
            {activePanel === 4 ? renderButton() : null}
        </div>
    );
};

export { Page2H1_4 };