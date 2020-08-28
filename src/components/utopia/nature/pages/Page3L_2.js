import React, { useState } from 'react';

import { BackButton, OpenButton } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/3L2_UTOPIA.jpg';

const Page3L_2 = () => {
    const bg1 = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_2_nomap.jpg';
    const [showGlimpse, setShowGlimpse] = useState(false);
    const [glimpsed, setGlimpsed] = useState(false);

    const handleGlimpse = () => {
        setShowGlimpse(true);
        setGlimpsed(true);
        setTimeout(() => {
            setShowGlimpse(false);
        }, 5000)
    }

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of squirrel and tree with face in it' />
            <img className={`page__image--glimpse ${showGlimpse ? 'active' : ''}`} src={bg1} alt='glimpse of dystopia' />
            <BackButton link='/utopia/3L_1' theme='utopia' />
            {glimpsed ? null : <OpenButton title='face' onClick={handleGlimpse} top='34vh' left='38vw' width='10vw' />}
        </div>
    );
};

export { Page3L_2 };