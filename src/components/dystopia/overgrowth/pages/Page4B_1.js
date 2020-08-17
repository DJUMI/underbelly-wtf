import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/dystopia/overgrowth/Dystopia4B_1.jpg'

const Page4B_1 = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Woman attacking you with machete' />
        </div>
    );
};

export { Page4B_1 };