import React from 'react';
import { Link } from 'react-router-dom';

//import bg from '../../../assets/images/dystopia/dystopia_start.jpg'

const DystopiaStart = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/dystopia_start.jpg';
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Creepy Bunker' />
            <div className='d-start__svg__container--comp'>
                <svg viewBox='0 0 70 96' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/1A'>
                        <polygon className='clickable--svg' points='0,7.5 38,1 64.5,10 70,85 33,95 7,83' />
                    </Link>
                </svg>
            </div>

            <div className='d-start__svg__container--fence'>
                <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
                    <Link to='/dystopia/1B'>
                        <polygon className='clickable--svg' points='0,100 50,0 100,100' />
                    </Link>
                </svg>
            </div>
        </div>
    );
};

export default DystopiaStart;
