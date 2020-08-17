import React from 'react';
import { Link } from 'react-router-dom';

//import bg from '../../../../assets/images/dystopia/overgrowth/Dystopia4B.jpg'

const Page4B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia4B.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two armed women looting a house' />
            <div className='fade-in'>
                <div className='page__footer--dystopia'>
                    <Link className='text__link' to='/dystopia/5B'>
                        <p className='dystopia__text--clickable'>> "Ope, sorry"</p>
                    </Link>
                </div>
            </div>
            <div className='p4B__svg__container'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/4B_1'>
                        <circle className='clickable--svg' cx="50" cy="50" r="47" />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export { Page4B };