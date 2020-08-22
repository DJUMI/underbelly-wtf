import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';

const Page3C_5 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia3C.jpg';

    const [toggle, setToggle] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setToggle(2);
        }, 4000);
    }, []);

    const renderFooter = () => (
        <div className='page__footer--dystopia'>
            <Typed
                className='dystopia__text'
                strings={['"…Are you f*cking stupid? Get out of here, I’m done answering questions."']}
                typeSpeed={t.typeSpeedFast}
                showCursor={false}
            />
        </div>
    );

    const renderButton = () => (
        <div className='p2C__svg__container--enter'>
            <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                <Link to='/dystopia/4C'>
                    <circle className='clickable--svg' cx="50" cy="50" r="47" />
                </Link>
            </svg>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two armed guards stand near a hospital entrance' />
            {toggle === 1 ? renderFooter() : null}
            {toggle === 2 ? renderButton() : null}
        </div>
    );
};

export { Page3C_5 };