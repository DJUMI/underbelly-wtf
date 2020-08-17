import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import bg from '../../../../assets/images/dystopia/overgrowth/Dystopia6B.jpg'

const Page6B_3 = () => {
    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/1B'>
                <p className='dystopia__text--clickable'>"Thanks for the heads up! And sorry for interrupting your scavenging."</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two women' />
            <div className='page__footer--dystopia'>
                <div className='right-align'>
                    <Typed
                        className='dystopia__text--speaker2'
                        strings={['"Before you go, though…since you seem new around here…"']}
                        typeSpeed={40}
                        showCursor={false}
                    />
                </div>
                <br></br>
                <br></br>
                <Typed
                    className='dystopia__text'
                    strings={['"Avoid the Hospital District. They’ve built a bit of a ‘Utopia’ there. You can’t trust them, it’s all doublespeak."']}
                    typeSpeed={40}
                    showCursor={false}
                    startDelay={4000}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page6B_3 };