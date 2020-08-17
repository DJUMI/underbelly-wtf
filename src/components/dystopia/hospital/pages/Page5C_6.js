import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import bg from '../../../../assets/images/dystopia/hospital/Dystopia4C_3.jpg'

const Page5C_6 = () => {

    return (
        <Link to='/dystopia/9C'>
            <div className='page'>
                <img className='page__image' src={bg} alt='Hospital reception desk' />
                <div className='page__footer--dystopia'>
                    <Typed
                        className='dystopia__text'
                        strings={['"You don’t get to just leave once you’ve entered the Hospital District. It’s rude and devilish."']}
                        typeSpeed={20}
                        showCursor={false}
                    />
                    <br></br>
                    <br></br>
                    <Typed
                        className='dystopia__text'
                        strings={['"Police! Seize this demon immediately and send them to the Sick District!"']}
                        typeSpeed={20}
                        showCursor={false}
                        startDelay={4000}
                    />
                </div>
            </div>
        </Link>
    );
};

export { Page5C_6 };