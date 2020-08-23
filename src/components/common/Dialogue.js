import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '.././../constants/text';
import d_next from '../../assets/icons/dystopia/forward.png'

/* component to render dialogue boxes
    theme = string(utopia or dystopia)
    bottom = boolean if true renders box at bottom of screen
    button = boolean if true render right arrow button
    messages = array of objects { speaker: string, message: string }
    responses = array of objects { link: string, message: string }
*/

const Dialogue = ({ theme, bottom, buttonLink, fast, messages, responses }) => {
    const typeSpeed = fast ? t.typeSpeedFast : t.typeSpeed;

    var position = '';
    if (bottom) {
        position = '--bottom';
    }

    const [showButton, setShowButton] = useState(false);
    const [showSecondMsg, setShowSecondMsg] = useState(false);
    const [showResponse, setShowResponse] = useState(messages.length ? false : true);

    const renderMessage = () => (
        <div className='fade-in'>
            <span className={`dialogue__text--${theme}--name`}>{messages[0].speaker}: </span>
            <Typed
                className={`dialogue__text--${theme}`}
                strings={[messages[0].message]}
                typeSpeed={typeSpeed}
                showCursor={false}
                startDelay={1000}
                onComplete={() => setTimeout(() => {
                    setShowResponse(true);
                    if (buttonLink) {
                        setShowButton(true);
                    }
                }, 500)}
            />
        </div>
    );

    const renderTwoMessages = () => (
        <div className='fade-in'>
            <span className={`dialogue__text--${theme}--name`}>{messages[0].speaker}: </span>
            <Typed
                className={`dialogue__text--${theme}`}
                strings={[messages[0].message]}
                typeSpeed={typeSpeed}
                showCursor={false}
                startDelay={1000}
                onComplete={() => setShowSecondMsg(true)}
            />
            <br></br>
            <br></br>
            {showSecondMsg ? renderSecondMsg() : null}
        </div>
    );

    const renderSecondMsg = () => (
        <>
            {messages[1].speaker ? <span className={`dialogue__text--${theme}--name`}>{messages[1].speaker}: </span> : null}
            <Typed
                className={`dialogue__text--${theme}`}
                strings={[messages[1].message]}
                typeSpeed={typeSpeed}
                showCursor={false}
                startDelay={1000}
                onComplete={() => setTimeout(() => {
                    setShowResponse(true);
                    if (buttonLink) {
                        setShowButton(true);
                    }
                }, 500)}
            />
        </>
    );

    const renderMessages = () => {
        if (messages.length === 1) {
            return renderMessage();
        } else if (messages.length === 2) {
            return renderTwoMessages();
        }
    };

    const renderResponses = () => (
        <div className='fade-in'>
            {responses.map(res => (
                <Link className='text__link' to={res.link}>
                    <p className={`dialogue__text--${theme}--clickable`}>> {res.message}</p>
                </Link>
            ))}
        </div>
    );

    const renderButton = () => (
        <div className='fade-in dialogue__container--icon'>
            <Link to={buttonLink}>
                <img className={`dialogue__icon--${theme}`} src={d_next} alt={'right arrow'} />
            </Link>
        </div>
    );

    return (
        <div className={`dialogue${position}`}>
            {renderMessages()}
            {showResponse ? renderResponses() : null}
            {showButton ? renderButton() : null}
        </div>
    );
};

export { Dialogue };

Dialogue.defaultProps = {
    bottom: false,
    button: false,
    buttonLink: '',
    fast: false,
    messages: [],
    responses: []
};