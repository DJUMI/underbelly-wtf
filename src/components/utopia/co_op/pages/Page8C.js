import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
import bg from '../../../../assets/images/utopia/co_op/8C_UTOPIA.jpg'

const Page8C = () => {
    const [showButton, setShowButton] = useState(false);

    const renderButton = () => (
        <div className='p8C__svg__container'>
            <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                <Link to='/utopia/9C'>
                    <circle className='clickable--svg' cx="50" cy="50" r="47" />
                </Link>
            </svg>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two people sitting in a room' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Well we were just having one of our weekly meetings. We’re about done. Could you actually go to the garden and grab a tomato? We’re about to make pasta for dinner!"']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowButton(true) }, 1000)}
                />
            </div>
            {showButton ? renderButton() : null}
        </div>
    );
};

export { Page8C };