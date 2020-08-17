import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/dystopia/bunker/Dystopia10A.jpg'

const Page10A = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Room with bed and computer' />
            <Link to='/dystopia/8A'>go to 8A</Link>
        </div>
    );
};

export { Page10A };