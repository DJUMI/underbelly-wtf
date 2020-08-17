import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
//import bg from '../../../../assets/images/dystopia/sick/Dystopia9C_4.jpg'

const Page12C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_4.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <div className='page__header--dystopia'>
                <Typed
                    className='dystopia__text'
                    strings={['"I’m so sorry to hear that, but for the future safety of the US, you cannot leave."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                />
                <p className='dystopia__text'>fin.</p>
            </div>
        </div>
    );
};

export { Page12C };