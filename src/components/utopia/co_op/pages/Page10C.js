import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Dialogue } from '../../../common';
import bg1 from '../../../../assets/images/utopia/co_op/10C_UTOPIA.jpg'
import bg2 from '../../../../assets/images/utopia/co_op/11C_UTOPIA.jpg'
import bg3 from '../../../../assets/images/landing/end.png'

const Page10C = () => {
    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 10000);

        setTimeout(() => {
            setActivePanel(3);
        }, 20000);
    }, []);

    const render10C = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg1} alt='Hospital room' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Nurse', message: 'We knew this was going to be a risk of the Giant Purge. It’s still better for the collective.' },
                    { speaker: 'Doctor', message: 'I know friend. I’ll call them right now. Their ID says they’re approved to be a donor and a candidate for Tree Transformation' }
                ]}
            />
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