import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Dialogue } from '../../../common';
import bg from '../../../../assets/images/utopia/co_op/8C_UTOPIA.jpg'

const Page8C = () => {
    const [showButton, setShowButton] = useState(true);

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
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Housemate', message: 'That was kind of the purpose of the Giant Purge, to forget. Ha Ha.' },
                    { speaker: '', message: 'But we were just finishing up our flatmate meeting which we’ll forgive you for missing this time. But could you go out to the garden to grab us a tomato? Friend here is going to make us pasta for dinner!' }
                ]}
            />
            {showButton ? renderButton() : null}
        </div>
    );
};

export { Page8C };