import React from 'react';

const PosterModal = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/utopia/hospital/1H_poster.jpg';

    return (
        <div className='modal__container'>
            <img className='modal__image' src={bg} alt='Poster' />
        </div>
    );
};

export { PosterModal };
