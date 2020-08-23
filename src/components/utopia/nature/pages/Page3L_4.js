import React from 'react';

import { LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/3L4_UTOPIA.jpg'

const Page3L_4 = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Sitting on bench' />
            <LinkButton title='bug' link='/utopia/3L_5' top='6.5vh' left='11.5vw' width='10vw' />
        </div>
    );
};

export { Page3L_4 };