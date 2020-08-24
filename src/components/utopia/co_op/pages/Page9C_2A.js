import React from 'react';

import { BackButton, LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/co_op/9C2_UTOPIA.jpg'

const Page9C_2A = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hallway' />
            <LinkButton title='robot' link='/utopia/9C_2B' top='25vh' left='67vw' width='20vw' />
            <BackButton link='/utopia/9C_tom' theme='utopia' />
        </div>
    );
};

export { Page9C_2A };