import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/utopia/co_op/6C_UTOPIA.jpg'

const Page6CA = () => {

    return (
        <Link to='/utopia/6CB'>
            <div className='page'>
                <img className='page__image' src={bg} alt='Two people sitting in a living room' />
            </div>
        </Link>
    );
};

export { Page6CA };