import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Dialogue } from '../../../common';
import bg from '../../../../assets/images/utopia/co_op/9C2_UTOPIA.jpg'

const Page9C_2C = () => {
    const [showButton, setShowButton] = useState(true);

    const renderButton = () => (
        <div className='svg__container--back'>
            <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                <Link to='/utopia/9C_tom'>
                    <circle className='clickable--svg' cx="50" cy="50" r="47" />
                </Link>
            </svg>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hallway' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Robot', message: 'One pasta sauce coming right up!' }
                ]}
            />
            {renderButton()}
        </div>
    );
};

export { Page9C_2C };