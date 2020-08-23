import React from 'react';

import { LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/hospital/2H8_UTOPIA.jpg'

const Page2H8 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Fully regrown flowers' />
            <LinkButton title='growth' link='/utopia/2H9' top='45vh' left='26vw' width='20vw' />
            <LinkButton title='growth2' link='/utopia/2H9' top='40vh' left='69vw' width='20vw' />
        </div>
    );
};

export { Page2H8 };