import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
//import bg from '../../../../assets/images/dystopia/overgrowth/Dystopia4B.jpg'

const Page5B = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia4B.jpg';

    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/6B_1'>
                <p className='dystopia__text--clickable'>> "Can you start from the beginning? I have no idea what’s going on…"</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two women with weapons down' />
            <div className='page__footer--dystopia'>
                <div className='right-align'>
                    <Typed
                        className='utopia__text--speaker2'
                        strings={['Are you trying to poach on our finds?']}
                        typeSpeed={t.typeSpeedFast}
                        showCursor={false}
                    />
                </div>
                <br></br>
                <br></br>
                <Typed
                    className='utopia__text'
                    strings={['Because we’re working for the Bunker District, we’re not ‘looting’—f*ck the Hospital District for villainizing us.']}
                    typeSpeed={t.typeSpeedFast}
                    showCursor={false}
                    startDelay={2000}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page5B };