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

const Dialogue = ({ theme, bottom, button, buttonLink, messages, responses }) => {
    var position = '';
    if (bottom) {
        position = '--bottom';
    }

    const [showButton, setShowButton] = useState(false);
    const [showResponse, setShowResponse] = useState(false);

    const renderMessages = () => (
        <>
            {messages.map(msg => (
                <>
                    <div className='fade-in'>
                        <span className={`dialogue__text--${theme}--name`}>{msg.speaker}: </span>
                        <Typed
                            className={`dialogue__text--${theme}`}
                            strings={[msg.message]}
                            typeSpeed={t.typeSpeed}
                            showCursor={false}
                            startDelay={1000}
                            onComplete={() => setTimeout(() => { 
                                setShowResponse(true);
                                if (button) {
                                    setShowButton(true);
                                }
                            }, 500)}
                        />
                    </div>
                    <br></br>
                </>
            ))}
        </>
    );

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
        <div className={`dialogue--${theme}${position}`}>
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
    responses: []
};