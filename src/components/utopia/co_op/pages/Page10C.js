import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
import bg1 from '../../../../assets/images/utopia/co_op/10C_UTOPIA.jpg'
import bg2 from '../../../../assets/images/utopia/co_op/11C_UTOPIA.jpg'
import bg3 from '../../../../assets/images/landing/end.png'

const Page10C = () => {
    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 20000);

        setTimeout(() => {
            setActivePanel(3);
        }, 30000);
    }, []);

    const render10C = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg1} alt='Hospital room' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"I don’t think they’re going to wake up. It’s the 5 year mark for coma patients so we have to transfer them to Choose Your Time."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                />
                <br></br>
                <br></br>
                <div className='right-align'>
                    <Typed
                        className='utopia__text--speaker2'
                        strings={['"I’ll call them right now. Their ID says they’re a donor and approve Tree Transformation."']}
                        typeSpeed={t.typeSpeed}
                        showCursor={false}
                        startDelay={8000}
                    />
                </div>
            </div>
        </div>
    );

    const render11C = () => (
        <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
            <img className='page__image' src={bg2} alt='Big tree' />
        </div>
    );

    const render12C = () => (
        <div className={`page--transition ${activePanel === 3 ? 'active' : ''}`}>
            <img className='page__image' src={bg3} alt='Big tree' />
            <Link to='/LP4'>
                <div className='LP__text_container--end'>
                    <span className='LP__text'>Try again?</span>
                </div>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            {render10C()}
            {render11C()}
            {render12C()}
        </div>
    );
};

export { Page10C };