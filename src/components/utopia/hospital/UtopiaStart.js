import React from 'react';

import { LinkButton } from '../../common';
import bg from '../../../assets/images/utopia/hospital/1H_UTOPIA.jpg'

const UtopiaStart = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital Room' />
            <LinkButton title='bed' link='/utopia/2HA' top='60vh' left='42vw' width='20vw' />
        </div>
    );
};

export default UtopiaStart;