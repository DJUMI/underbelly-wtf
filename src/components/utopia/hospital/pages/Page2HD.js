import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
import bg from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'

const Page2HD = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/utopia/2H1_4'>
                <p className='utopia__text--clickable'>> "Uh, yeah!"</p>
            </Link>
            <Link className='text__link' to='/utopia/3H'>
                <p className='utopia__text--clickable'>> "I think I'm okay, thanks!"</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Nurse in Hospital Room' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Right? So, in cases of direct impact injuries, patients\' memories are foggy, so we remove them to relieve the patient of the experience and give them the option to view the memory for complete transparency. Would you like to view your memory?"']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    onComplete={() => setTimeout(() => {setShowResponse(true)}, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page2HD };