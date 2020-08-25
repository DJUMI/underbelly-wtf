import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../constants/text';
import bg from '../../../assets/images/landing/end.png';

const End = () => {
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowButtons(true);
        }, 5000);
    }, [])

    const renderButtons = () => (
        <div className='end__container'>
            <Link className='end__container' to='/LP5'>
                <span className='LP__text'>Restart</span>
            </Link>
            <Link className='end__container' to='/credits'>
                <span className='LP__text'>Credits</span>
            </Link>
            <Link className='end__container' to='/jukebox'>
                <span className='LP__text'>Jukebox</span>
            </Link>
        </div>
    );

    return (
        <>
            <img className='page__image' src={bg} alt='Game Over' />
            <div className='LP__text_container--end'>
                {showButtons ? renderButtons() : null}
            </div>
        </>
    );
}

export { End };