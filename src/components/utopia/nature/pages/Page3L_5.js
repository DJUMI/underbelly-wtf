import React from 'react';

import { NextButton } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/3L5_UTOPIA.jpg';

const Page3L_5 = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two people meditating next to a well' />
            <NextButton link='/utopia/4L' theme='utopia' />
        </div>
    );
};

export { Page3L_5 };