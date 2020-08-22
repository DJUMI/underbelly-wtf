import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import bg1 from '../../../../assets/images/utopia/nature/5L_UTOPIA.jpg'
import bg2 from '../../../../assets/images/utopia/nature/6L_UTOPIA.jpg'


const Page5_6L = () => {
    const [activePanel, setActivePanel] = useState(1);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 3000);
        setTimeout(() => {
            setShowButton(true);
        }, 3500);
    }, []);

    const renderButton = () => (
        <div className='p6L__svg__container'>
            <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                <Link to='/utopia/7L'>
                    <circle className='clickable--svg' cx="50" cy="50" r="47" />
                </Link>
            </svg>
        </div>
    );

    const render5L = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg1} alt='Old person waiting at the bus stop' />
        </div>
    );

    const render6L = () => (
        <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
            <img className='page__image' src={bg2} alt='Van that has logo "Choose your time"' />
        </div>
    );

    return (
        <div className="page">
            {render5L()}
            {render6L()}
            {showButton ? renderButton() : null}
        </div>
    );
};

export { Page5_6L };