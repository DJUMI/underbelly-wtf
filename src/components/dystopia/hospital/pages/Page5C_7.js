import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

//import bg from '../../../../assets/images/dystopia/hospital/Dystopia4C_1.jpg'

const Page5C_7 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_1.jpg';

    return (
        <Link to='/dystopia/7C'>
            <div className='page'>
                <img className='page__image' src={bg} alt='Hospital reception desk' />
                <div className='page__footer--dystopia'>
                    <Typed
                        className='dystopia__text'
                        strings={['"Praise Him! How lucky you are to be able to afford residence here! I will remove the funds from your account immediately, please come in right away!"']}
                        typeSpeed={40}
                        showCursor={false}
                    />
                </div>
            </div>
        </Link>
    );
};

export { Page5C_7 };