import React from 'react';

import { LinkButton } from '../../../common';

import bg from '../../../../assets/images/utopia/co_op/2C_UTOPIA.jpg'

const Page2C = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Co op front door and bulletin board' />
            <LinkButton title='board' link='/utopia/3C' top='5vh' left='8vw' width='30vw'/>
            <LinkButton title='door' link='/utopia/5C' top='28vh' left='46vw' width='20vw'/>
        </div>
    );
};

export { Page2C };