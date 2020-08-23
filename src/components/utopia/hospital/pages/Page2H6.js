import React from 'react';

import { LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/hospital/2H6_UTOPIA.jpg'

const Page2H6 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Picking a flower' />
            <LinkButton title='bug' link='/utopia/2H7' top='38vh' left='44.5vw' width='10vw' />
        </div>
    );
};

export { Page2H6 };