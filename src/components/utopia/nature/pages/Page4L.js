import React from 'react';

import { LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/4L_UTOPIA.jpg'

const Page4L = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Old person walking to a bus stop' />
            <LinkButton title='bus' link='/utopia/5_6L' top='41vh' left='35vw' width='20vw' />
        </div>
    );
};

export { Page4L };