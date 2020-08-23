import React from 'react';

import { LinkButton } from '../../../common';

import bg from '../../../../assets/images/utopia/co_op/1C_UTOPIA.jpg'

const Page1C = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Several houses in a cul de sac' />
            <LinkButton title='house' link='/utopia/2C' top='40vh' left='45vw' width='20vw'/>
        </div>
    );
};

export { Page1C };