import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
//import bg from '../../../../assets/images/dystopia/hospital/Dystopia4C_3.jpg'

const Page5C_3 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_3.jpg';

    return (
        <Link to='/dystopia/9C'>
            <div className='page'>
                <img className='page__image' src={bg} alt='Hospital reception desk' />
                <div className='page__footer--dystopia'>
                    <Typed
                        className='dystopia__text'
                        strings={['"Police! Please escort this heathen out of this office. Maybe it would be worth dropping them off at the Sick District, since they’ll probably end up there eventually anyway."']}
                        typeSpeed={t.typeSpeedFast}
                        showCursor={false}
                    />
                </div>
            </div>
        </Link>

    );
};

export { Page5C_3 };