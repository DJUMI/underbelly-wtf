import React from 'react';

import { LinkButton } from '../../../common';

import bg from '../../../../assets/images/utopia/co_op/9C1_UTOPIA_TOMATO.jpg'

const Page9C_1B = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hallway' />
            <LinkButton title='bug' link='/utopia/9C_tom' top='85.5vh' left='49.5vw' width='10vw' />
        </div>
    );
};

export { Page9C_1B };