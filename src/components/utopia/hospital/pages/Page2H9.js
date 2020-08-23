import React from 'react';

import { LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/hospital/2H9_UTOPIA.jpg'

const Page2H9 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Whack!' />
            <LinkButton title='whack' link='/utopia/2H10_14' color='red' top='25vh' left='35vw' width='30vw' />
        </div>
    );
};

export { Page2H9 };