import React from 'react';

import { LinkButton } from '../../../common';

import bg from '../../../../assets/images/utopia/co_op/6C_UTOPIA.jpg'

const Page6CA = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two people sitting in a living room' />
            <LinkButton title='housemate' link='/utopia/6CB' top='17vh' left='5vw' width='20vw' />
            <LinkButton title='housemate2' link='/utopia/6CB' top='37vh' left='62vw' width='20vw' />
        </div>
    );
};

export { Page6CA };