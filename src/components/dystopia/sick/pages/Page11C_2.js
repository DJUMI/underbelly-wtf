import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
//import bg from '../../../../assets/images/dystopia/sick/Dystopia9C_2.jpg'

const Page11C_2 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_2.jpg';

    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/11C_3'>
                <p className='dystopia__text--clickable'>> "Yes, of course!"</p>
            </Link>
            <Link className='text__link' to='/dystopia/12C'>
                <p className='dystopia__text--clickable'>> "I would like to leave. It’s not right that you’re keeping the cure secret."</p>
            </Link>
        </div>
    );
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <div className='page__header--dystopia'>
                <Typed
                    className='dystopia__text'
                    strings={['"Everyone is terrified to come to the Sick District, but we actually have open beds and are actively treating patients. But, it’s better to keep that illusion. If the Hospital District or Police get their hands on this, they will start an all out war to keep people enslaved and under their thumb."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                />
                <br></br>
                <br></br>
                <Typed
                    className='dystopia__text'
                    strings={['"That all being said…we are planning for the future. Several Bunker Districts Leaders are hoping to unite and start a much needed revolution, but it’s too risky right now. Anyway, I would like to give you the vaccine, while you’re here, so you can no longer contract COVID or infect others. Do you consent?"']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    startDelay={18000}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page11C_2 };