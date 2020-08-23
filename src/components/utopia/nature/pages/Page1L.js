import React from 'react';

import { LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/1L_UTOPIA.jpg'

const Page1L = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='View of beautiful lush land full of trees and wildlife' />
            <LinkButton title='pond' link='/utopia/2L_1' top='38vh' left='10vw' width='20vw' />
            <LinkButton title='bench' link='/utopia/3L_1' top='50vh' left='46vw' width='20vw' />
            <LinkButton title='co-op' link='/utopia/1C' top='15vh' left='75vw' width='20vw' />
        </div>
    );
};

export { Page1L };