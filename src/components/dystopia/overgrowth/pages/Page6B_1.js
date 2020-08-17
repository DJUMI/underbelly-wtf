import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
//import bg from '../../../../assets/images/dystopia/overgrowth/Dystopia6B.jpg'

const Page6B_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia6B.jpg';

    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/6B_2'>
                <p className='dystopia__text--clickable'>>>></p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two women' />
            <div className='page__footer--dystopia'>
                <Typed
                    className='utopia__text'
                    strings={['We’re scavenging. We’re scavengers.']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                />
                <br></br>
                <br></br>
                <div className='right-align'>
                    <Typed
                        className='utopia__text--speaker2'
                        strings={['I guess it’s not really super public yet, but the Bunker District finally has some ventilation for melting down old metals from this B.C. world so we can make more bed frames for the Clinics and stuff.']}
                        typeSpeed={t.typeSpeed}
                        startDelay={3000}
                        showCursor={false}
                        onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                    />
                </div>
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page6B_1 };