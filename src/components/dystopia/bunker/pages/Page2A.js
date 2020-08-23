import React from 'react';
import { Link } from 'react-router-dom';

import { Dialogue } from '../../../common';

const Page2A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia2A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Computer Screen' />
            <Dialogue 
                theme='dystopia'
                messages={[
                    { speaker: 'Receptionist', message: 'Welcome to the East Side District. Unfortunately, our clinic is currently full and we are unable to take any new patients.' }
                ]}
                responses={[
                    { link: '/dystopia/3A', message: '"I\'m not looking for a clinic. I\'m just a bit confused. Where am I?"' }
                ]}
            />
            <Link to='/dystopia'>
                <div className='clickable dystopia__button--exit' />
            </Link>
        </div>
    );
};

export { Page2A };