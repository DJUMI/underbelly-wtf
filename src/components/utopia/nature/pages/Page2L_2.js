import React, { useEffect, useState } from 'react';

import { BackButton } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/2L2_UTOPIA.jpg'
import bg_bubble from '../../../../assets/images/utopia/nature/2L2_UTOPIA_BUBBLE.jpg'

const Page2L_2 = () => {
    const [showButton, setShowButton] = useState(false);
    const [zoom, setZoom] = useState(0);

    useEffect(() => {
        setTimeout(() => setShowButton(true), 6000);
        setTimeout(() => setZoom(1), 2000);
        setTimeout(() => setZoom(2), 3000);
        setTimeout(() => setZoom(3), 3500);
        setTimeout(() => setZoom(4), 4500);
    }, []);

    const renderImage = () => {
        switch (zoom) {
            case 0:
                return <img className={'page__image'} src={bg} alt='Close up of deer with camera for an eye' />
            case 1:
                return <img className={'page__image zoom'} src={bg} alt='Close up of deer with camera for an eye' />
            case 2:
                return <img className={'page__image zoomer'} src={bg} alt='Close up of deer with camera for an eye' />
            case 3:
                return <img className={'page__image zoomest'} src={bg} alt='Close up of deer with camera for an eye' />
            case 4:
                return <img className={'page__image'} src={bg_bubble} alt='Close up of deer with camera for an eye' />
            default:
                return null
        }
    }

    return (
        <div className='page'>
            {renderImage()}
            {/* <img className={`page__image ${zoom ? 'zoom' : ''}`} src={bg} alt='Close up of deer with camera for an eye' /> */}
            {showButton ? <BackButton link='/utopia/1L' theme='utopia' /> : null}
        </div>
    );
};

export { Page2L_2 };