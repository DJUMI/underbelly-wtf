import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
//import bg from '../../../../assets/images/dystopia/sick/Dystopia9C_2.jpg';

const Page11C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_2.jpg';

    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/11C_1'>
                <p className='dystopia__text--clickable'>> "I thought this was going to be like…a plague zone."</p>
            </Link>
            <Link className='text__link' to='/dystopia/12C'>
                <p className='dystopia__text--clickable'>> "I don’t think I’m supposed to be here, I’d like to leave…"</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <div className='page__header--dystopia'>
                <Typed
                    className='dystopia__text'
                    strings={['"Welcome to the Sick District, you look surprised."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page11C };