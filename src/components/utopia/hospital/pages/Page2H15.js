import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
import bg from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'

const Page2H15 = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/utopia/2H16_20'>
                <p className='utopia__text--clickable'>> "I'll have it reinserted."</p>
            </Link>
            <Link className='text__link' to='/utopia/3H'>
                <p className='utopia__text--clickable'>> "I don't need it."</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Nurse in Hospital Room' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Now, would you like it reinserted in your memories or do you want it permanently removed? You might experience some headaches when reinserted."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <><p className='utopia__text--blank'>></p><p className='utopia__text--blank'>></p></>}
            </div>
        </div>
    );
};

export { Page2H15 };