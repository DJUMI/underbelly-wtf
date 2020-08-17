import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
import bg from '../../../../assets/images/utopia/nature/7L3_UTOPIA.jpg'

const Page7L_3A = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/utopia/7L_3B'>
                <p className='utopia__text--clickable'>> "No.. I don’t, but I’d like to know more about your services"</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Receptionist at desk' />
            <div className='page__footer--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Welcome to Choose Your Time! Do you have an appointment?"']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page7L_3A };