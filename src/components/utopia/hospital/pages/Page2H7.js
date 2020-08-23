import React from 'react';

import { LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/hospital/2H7_UTOPIA.jpg'

const Page2H7 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Flowers beginning to regrow' />
            <LinkButton title='growth' link='/utopia/2H8' top='73vh' left='32.5vw' width='10vw' />
            <LinkButton title='growth2' link='/utopia/2H8' top='60vh' left='69vw' width='10vw' />
            <LinkButton title='growth3' link='/utopia/2H8' top='62vh' left='75.5vw' width='10vw' />
            <LinkButton title='growth4' link='/utopia/2H8' top='50vh' left='79vw' width='10vw' />
        </div>
    );
};

export { Page2H7 };