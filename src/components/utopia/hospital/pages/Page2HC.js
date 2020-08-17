import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
import bg from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'

const Page2HC = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/utopia/2HD'>
                <p className='utopia__text--clickable'>> "Oh yeah, what a crazy time in history."</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Nurse in Hospital Room' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Looks like you\'re experiencing some side effects...']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                />
                <br></br>
                <Typed
                    className='utopia__text'
                    strings={['"After president Trump was removed from office, human rights activists pushed Congress to fight the loneliness crisis. So now people have the option to have a companion. They\'re like pets but can talk and assist you in almost anything. Oh and they never die!"']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    startDelay={4000}
                    onComplete={() => setTimeout(() => {setShowResponse(true)}, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page2HC };