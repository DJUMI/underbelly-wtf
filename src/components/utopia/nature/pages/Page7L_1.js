import React from 'react';

import { LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/7L1_UTOPIA.jpg'

const Page7L_1 = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Medical building' />
            <LinkButton title='doors' link='/utopia/7L_2' top='71vh' left='34.5vw' width='10vw' />
        </div>
    );
};

export { Page7L_1 };