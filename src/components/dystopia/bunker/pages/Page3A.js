import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

//import bg from '../../../../assets/images/dystopia/bunker/Dystopia3A.jpg'

const Page3A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia3A.jpg';

    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/4A'>
                <p className='dystopia__text--clickable'>> "Thank you...?"</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Computer Screen' />
            <div className='page__header--screen'>
                <Typed
                    className='utopia__text'
                    strings={['I see. In that case, we will open the bunker doors for you. Once you enter, you will be required to undergo a brief health evaluation. Please proceed down the stairs to the Medic Chamber.']}
                    typeSpeed={40}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                <p className='dystopia__text'></p>
                <br></br>
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
            <Link to='/dystopia'>
                <div className='clickable dystopia__button--exit' />
            </Link>
        </div>
    );
};

export { Page3A };