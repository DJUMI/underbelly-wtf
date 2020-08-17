import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import bg from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'

const Page2HB = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/utopia/2HC'>
                <p className='utopia__text--clickable'>> "My companion? And what??"</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Nurse in Hospital Room' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"You got hit pretty hard in the head. Your companion let us know you weren\'t conscious. Would you like to view your impact memory provided by our Memory Service?"']}
                    typeSpeed={40}
                    showCursor={false}
                    onComplete={() => setTimeout(() => {setShowResponse(true)}, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page2HB };