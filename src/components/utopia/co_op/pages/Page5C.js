import React from 'react';

import { LinkButton } from '../../../common';

import bg from '../../../../assets/images/utopia/co_op/5C_UTOPIA.jpg'

const Page5C = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hallway' />
            <LinkButton title='living-room' link='/utopia/6CA' top='13vh' left='5vw' width='20vw'/>
        </div>
    );
};

export { Page5C };