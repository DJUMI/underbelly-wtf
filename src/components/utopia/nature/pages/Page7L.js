import React from 'react';

import { BackButton, LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/7L_UTOPIA.jpg'

//TODO: and down button
const Page7L = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Van leaving with old man' />
            <BackButton link='/utopia/1L' theme='utopia' />
            <LinkButton title='bus' link='/utopia/7L_1' top='19vh' left='76vw' width='30vw' />
        </div>
    );
};

export { Page7L };