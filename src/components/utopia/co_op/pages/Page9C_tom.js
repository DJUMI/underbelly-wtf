import React from 'react';

import { LinkButton } from '../../../common';

import bg from '../../../../assets/images/utopia/co_op/5C_UTOPIA.jpg'

const Page9C_tom = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hallway' />
            <LinkButton title='back-door' link='/utopia/9C_1A' top='8vh' left='32vw' width='10vw' />
            <LinkButton title='kitchen' link='/utopia/9C_2A' top='23vh' left='35vw' width='10vw' />
            <LinkButton title='stairs' link='/utopia/9C_4' top='30vh' left='60vw' width='30vw' />
        </div>
    );
};

export { Page9C_tom };