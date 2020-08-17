import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

//import bg from '../../../../assets/images/dystopia/hospital/Dystopia4C_1.jpg'

const Page5C_2 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_1.jpg';

    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/5C_3'>
                <p className='dystopia__text--clickable'>> "under $50,000"</p>
            </Link>
            <Link className='text__link' to='/dystopia/5C_4'>
                <p className='dystopia__text--clickable'>> "$50,000 - $1,000,000"</p>
            </Link>
            <Link className='text__link' to='/dystopia/5C_7'>
                <p className='dystopia__text--clickable'>> "over $1,000,000"</p>
            </Link>
            <Link className='text__link' to='/dystopia/1C'>
                <p className='dystopia__text--clickable'>> "That’s none of your business, I’d like to leave."</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <div className='page__footer--dystopia'>
                <p className='dystopia__text'></p>
                <Typed
                    className='dystopia__text'
                    strings={['"Praise Him, you are Saved. Please, come closer, child. Now tell me, what is your wealth?"']}
                    typeSpeed={20}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>

        </div>
    );
};

export { Page5C_2 };