import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
//import bg from '../../../../assets/images/dystopia/hospital/Dystopia5C_1.jpg'

const Page6C = () => {
    return (
        <div className='page'>
            {/* <img className='page__image' src={bg} alt='Hospital reception desk' /> */}
            <div className='page__footer--dystopia'>
                <Typed
                    className='dystopia__text'
                    strings={['"After only a week of training, which a lot of it was just learning prayers, you are bought by one of the residents to take of for the rest of your time in the District. There is no option for escape, this is your life now."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                />
                <p className='dystopia__text'>fin.</p>
            </div>
        </div>
    );
};

export { Page6C };