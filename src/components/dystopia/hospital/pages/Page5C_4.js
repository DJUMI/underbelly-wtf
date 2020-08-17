import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
//import bg from '../../../../assets/images/dystopia/hospital/Dystopia4C_1.jpg'

const Page5C_4 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia4C_1.jpg';

    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/5C_5'>
                <p className='dystopia__text--clickable'>> "What does that mean?"</p>
            </Link>
            <Link className='text__link' to='/dystopia/1C'>
                <p className='dystopia__text--clickable'>> "No, I would like to leave."</p>
            </Link>
        </div>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hospital reception desk' />
            <div className='page__footer--dystopia'>
                <Typed
                    className='dystopia__text'
                    strings={['"It’s good you are healthy, but unfortunately you cannot live in this coveted Hospital District. You can, however, afford to pay for Medical Training. Well done, you!"']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>

        </div>
    );
};

export { Page5C_4 };