import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/nature/3L5_UTOPIA.jpg'

//TODO: replace next button
const Page3L_5 = () => {

    return (
        <Link to='/utopia/4L'>
            <div className='page'>
                <img className='page__image' src={bg} alt='Two people meditating next to a well' />
            </div>
        </Link>
    );
};

export { Page3L_5 };