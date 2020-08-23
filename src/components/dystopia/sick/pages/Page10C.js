import React from 'react';

import { LinkButton } from '../../../common';

const Page10C = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_1.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='View of boarded up house and abandoned car covered in overgrowth' />
            <LinkButton title='doctor' link='/dystopia/11C' top='35vh' left='40vw' width='20vw'/>
        </div>
    );
};

export { Page10C };