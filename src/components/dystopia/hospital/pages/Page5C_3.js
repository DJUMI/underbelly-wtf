import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import bg from '../../../../assets/images/dystopia/hospital/Dystopia4C_3.jpg'

const Page5C_3 = () => {

    return (
        <Link to='/dystopia/9C'>
            <div className='page'>
                <img className='page__image' src={bg} alt='Hospital reception desk' />
                <div className='page__footer--dystopia'>
                    <Typed
                        className='dystopia__text'
                        strings={['"Police! Please escort this heathen out of this office. Maybe it would be worth dropping them off at the Sick District, since they’ll probably end up there eventually anyway."']}
                        typeSpeed={20}
                        showCursor={false}
                    />
                </div>
            </div>
        </Link>

    );
};

export { Page5C_3 };