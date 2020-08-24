import React from 'react';

const PaperModal = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia2B_newspaper.png';

    return (
        <div className='modal__container'>
            <img className='modal__image' src={bg} alt='newspaper' />
        </div>
    );
};

export { PaperModal };
