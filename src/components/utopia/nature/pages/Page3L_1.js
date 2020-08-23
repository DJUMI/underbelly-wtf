import React from 'react';

import { LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/3L1_UTOPIA.jpg'

const Page3L_1 = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Bench by several tall trees' />
            <LinkButton title='tree' link='/utopia/3L_2' top='40vh' left='38vw' width='10vw' />
            <LinkButton title='bench' link='/utopia/3L_4' top='58vh' left='50vw' width='20vw' />
        </div>
    );
};

export { Page3L_1 };