import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
//import bg from '../../../../assets/images/dystopia/hospital/Dystopia4C_1.jpg'

const Page5C_5 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_1.jpg';

    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/6C'>
                <p className='dystopia__text--clickable'>> "Okay, that doesn’t sound creepy at all. Count me in!"</p>
            </Link>
            <Link className='text__link' to='/dystopia/5C_6'>
                <p className='dystopia__text--clickable'>> "Sorry, did you say they ‘buy’ me? That sounds like a nightmare, I’d like to leave."</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <div className='page__footer--dystopia'>
                <Typed
                    className='dystopia__text'
                    strings={['"You learn how to treat the people who can afford to live here, which is really a blessing because you wouldn’t want to live in those vile bunkers. Instead, we give you a modest room in a resident’s apartment — after they’ve bought you, of course — and then you are one of the lucky ones who gets to care for these truly Lucky souls."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>

        </div>
    );
};

export { Page5C_5 };