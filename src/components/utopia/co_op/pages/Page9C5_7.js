import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import bg1 from '../../../../assets/images/utopia/co_op/9C5_UTOPIA.jpg'
import bg2 from '../../../../assets/images/utopia/co_op/9C6_UTOPIA.jpg'
import bg3 from '../../../../assets/images/utopia/co_op/9C7_UTOPIA.jpg'

const Page9C5_7 = () => {
    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 5000);

        setTimeout(() => {
            setActivePanel(3);
        }, 10000);
    }, []);

    const renderButton = () => (
        <div className='p9C5_7__svg__container'>
            <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                <Link to='/utopia/10C'>
                    <circle className='clickable--svg' cx="50" cy="50" r="47" />
                </Link>
            </svg>
        </div>
    );

    const render9C_5 = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg1} alt='Laying in bed with companion by your feet' />
        </div>
    );

    const render9C_6 = () => (
        <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
            <img className='page__image' src={bg2} alt='Eyes starting to close' />
        </div>
    );

    const render9C_7 = () => (
        <div className={`page--transition ${activePanel === 3 ? 'active' : ''}`}>
            <img className='page__image' src={bg3} alt='Nothing we can do' />
        </div>
    );

    return (
        <div className='page'>
            {render9C_5()}
            {render9C_6()}
            {render9C_7()}
            {activePanel === 3 ? renderButton() : null}
        </div>
    );
};

export { Page9C5_7 };