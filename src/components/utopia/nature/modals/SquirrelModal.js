import React from 'react';

const SquirrelModal = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/utopia/nature/3L_1_squirrel.jpg';

    return (
        <div className='modal__container'>
            <img className='modal__image' src={bg} alt='Squirrel' />
        </div>
    );
};

export { SquirrelModal };
