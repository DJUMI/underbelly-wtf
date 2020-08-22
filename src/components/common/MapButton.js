import React from 'react';
import { Link } from 'react-router-dom';

const MapButton = () => (
    <div className='svg__container--map'>
        <svg viewBox='0 0 100 100' className='svg__content' preserveAspectRatio='none'>
            <Link to='/dystopia/8A'>
                <circle className='clickable--svg' cx="50" cy="50" r="47" />
            </Link>
        </svg>
    </div>
);

export { MapButton };