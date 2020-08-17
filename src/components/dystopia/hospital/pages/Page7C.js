import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
//import bg from '../../../../assets/images/dystopia/hospital/Dystopia5C_2.jpg'

const Page7C = () => {
    return (
        <div className='page'>
            {/* <img className='page__image' src={bg} alt='Nice luxury apartment' /> */}
            <div className='page__footer--dystopia'>
                <Typed
                    className='dystopia__text'
                    strings={['"money really does by health and happiness or some shit. However, within the next few weeks, you contract an illness and the Medical personnel prays for you but has no actual Medical training. You die (or something??)"']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                />
                <p className='dystopia__text'>fin.</p>
            </div>
        </div>
    );
};

export { Page7C };