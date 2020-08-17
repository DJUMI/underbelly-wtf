import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
import bg1 from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'
import bg2 from '../../../../assets/images/utopia/hospital/3H_UTOPIA_BUBBLE.jpg'

const Page3H = () => {
    const [activePanel, setActivePanel] = useState(1);

    const renderButton = () => (
        <div className='p3H__svg__container'>
            <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                <Link to='/utopia/1L'>
                    <circle className='clickable--svg' cx="50" cy="50" r="47" />
                </Link>
            </svg>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg1} alt='Nurse in Hospital Room' />
            <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
                <img className='page__image' src={bg2} alt='Nurse in Hospital Room' />
            </div>
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Of course. Well, then you\'re all set to go home. The doctor will send over post-memory removal information to your companion. Since your memory is still coming back you might have forgotten that rides home are provided! Take care!"']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setActivePanel(2) }, 1000)}
                />
            </div>
            {activePanel === 2 ? renderButton() : null}
        </div>
    );
};

export { Page3H };