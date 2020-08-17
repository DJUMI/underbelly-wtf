import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import bg from '../../../../assets/images/dystopia/sick/Dystopia9C_2.jpg'

const Page11C_1 = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/11C_2'>
                <p className='dystopia__text--clickable'>>>>>>></p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <div className='page__header--dystopia'>
                <Typed
                    className='dystopia__text'
                    strings={['"COVID-19 is very rare and treatable with the right vaccine. Germany sent us the instructions shortly after the Sheboygan District was obliterated."']}
                    typeSpeed={40}
                    showCursor={false}
                />
                <br></br>
                <br></br>
                <Typed
                    className='dystopia__text'
                    strings={['"We would like to spread the vaccine to the rest of the Districts, but the Police and the Hospital District are so bent of controlling the narrative that we’ve had to keep it secret for the last year."']}
                    typeSpeed={40}
                    showCursor={false}
                    startDelay={10000}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page11C_1 };