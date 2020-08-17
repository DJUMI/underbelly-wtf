import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
import bg from '../../../../assets/images/utopia/co_op/6C_UTOPIA_FACECHANGE.jpg'

const Page6CC = () => {
    return (
        <Link className='text__link' to='/utopia/7C'>
            <div className='page'>
                <img className='page__image' src={bg} alt='Two people sitting in a living room' />
                <div className='page__header--utopia'>
                    <Typed
                        className='utopia__text'
                        strings={['"You goof. And you’re still wearing your hospital gown, haha!"']}
                        typeSpeed={t.typeSpeed}
                        showCursor={false}
                    />
                </div>
            </div>
        </Link >
    );
};

export { Page6CC };