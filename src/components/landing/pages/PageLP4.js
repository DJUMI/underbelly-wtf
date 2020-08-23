import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../constants/text';

const PageLP4 = () => {
    const bg1 = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/landing/LP4_1.png';
    const bg2 = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/landing/LP4_2.png'

    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {

        setTimeout(() => {
            setActivePanel(2);
        }, 19000);
    }, []);

    const renderLP4_1 = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg1} alt='Enter' />
            <div className='LP__text_container'>
                <Typed
                    className='LP__text'
                    strings={['Welcome to a future.']}
                    typeSpeed={t.typeSpeedFast}
                    showCursor={false}
                />
                <br></br><br></br><br></br>
                <Typed
                    className='LP__text'
                    strings={['The worlds are intended to be explored. You may have to go through each more than once.']}
                    typeSpeed={t.typeSpeedFast}
                    showCursor={false}
                    startDelay={1600}
                />
                <br></br><br></br><br></br>
                <Typed
                    className='LP__text'
                    strings={['In fact it\'s encouraged.']}
                    typeSpeed={t.typeSpeedFast}
                    showCursor={false}
                    startDelay={5500}
                />
                <br></br><br></br><br></br>
                <Typed
                    className='LP__text'
                    strings={['Best of luck and remember, nothing is exactly as it seems.']}
                    typeSpeed={t.typeSpeedFast}
                    showCursor={false}
                    startDelay={8000}
                />
                <br></br><br></br><br></br>
                <Typed
                    className='LP__text--bold'
                    strings={['Where would you like to begin?']}
                    typeSpeed={t.typeSpeedFast}
                    showCursor={false}
                    startDelay={12000}
                />
            </div>

        </div>
    );

    const renderLP4_2 = () => (
        <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
            <img className='page__image' src={bg2} alt='Enter' />
            <div className='LP__text_container'>
                <span className='LP__text'>Welcome to a future.</span>
                <br></br><br></br><br></br>
                <span className='LP__text'>The worlds are intended to be explored. You may have to go through each more than once.</span>
                <br></br><br></br><br></br>
                <span className='LP__text'>In fact it's encouraged.</span>
                <br></br><br></br><br></br>
                <span className='LP__text'>Best of luck and remember, nothing is exactly as it seems.</span>
                <br></br><br></br><br></br>
                <span className='LP__text--bold'>Where would you like to begin?</span>
            </div>
        </div>
    );

    const renderButtons = () => (
        <>
            <Link to='/utopia'>
                <div className='clickable LP4__button--utopia' />
            </Link>
            <Link to='/dystopia'>
                <div className='clickable LP4__button--dystopia' />
            </Link>
        </>

    );

    return (
        <div className='page'>
            {renderLP4_1()}
            {renderLP4_2()}
            {activePanel === 2 ? renderButtons() : null}
        </div>
    );
};

export { PageLP4 };