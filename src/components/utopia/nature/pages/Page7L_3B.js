import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
import bg from '../../../../assets/images/utopia/nature/7L3_UTOPIA.jpg'

const Page7L_3B = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/utopia/7L_2'>
                <p className='utopia__text--clickable'>> "Oh wow! That’s cool."</p>
            </Link>
            <Link className='text__link' to='/utopia/7L_2'>
                <p className='utopia__text--clickable'>> "That’s.. Unsettling."</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Receptionist at desk' />
            <div className='page__footer--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Of course! Our main service is Assisted euthanization for those who are in extreme untreatable pain, have terminal illness, or those over 95 years of age."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                />
                <br></br>
                <br></br>
                <Typed
                    className='utopia__text'
                    strings={['"Our second most used service is Tree Transformation. Many families choose to have their deceased members ashes incorporated with soil to plant as trees!"']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    startDelay={11000}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page7L_3B };