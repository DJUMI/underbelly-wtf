import React from 'react';

import { LinkButton } from '../../../common';

import bg from '../../../../assets/images/utopia/co_op/3C_UTOPIA.jpg'

const Page3C = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Bulletin board' />
            <LinkButton title='bug' link='/utopia/2C' top='54vh' left='80vw' width='10vw'/>
        </div>
    );
};

export { Page3C };