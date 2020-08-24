import React from 'react';

//TODO: fade out
const CrashModal = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia3B_1_crash.png';

    return (
        <div className='modal__container'>
            <img className='modal__image' src={bg} alt='Mask' />
        </div>
    );
};

export { CrashModal };