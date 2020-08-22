import React from 'react';
import { Link } from 'react-router-dom';

const Page4B_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia4B_1.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Woman attacking you with machete' />
        </div>
    );
};

export { Page4B_1 };