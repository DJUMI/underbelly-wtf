import React from 'react';

const MaskModal = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia2B_mask.png';

    return (
        <div className='modal__container--flyer'>
            <img className='modal__image--flyer' src={bg} alt='mask' />
        </div>
    );
};

export { MaskModal };
