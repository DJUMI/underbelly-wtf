import React from 'react';
import { Link } from 'react-router-dom';

import { Dialogue } from '../../../common';

const Page3A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia3A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Computer Screen' />
            <Dialogue 
                theme='dystopia'
                messages={[
                    { speaker: 'Receptionist', message: 'This is the East Side Bunker District. We do have several cots available for those uninfected. I can open the doors for you where you will be greeted by one of our medics.' }
                ]}
                responses={[
                    { link: '/dystopia/4A', message: '"Thank you...?"' }
                ]}
            />
            <Link to='/dystopia'>
                <div className='clickable dystopia__button--exit' />
            </Link>
        </div>
    );
};

export { Page3A };