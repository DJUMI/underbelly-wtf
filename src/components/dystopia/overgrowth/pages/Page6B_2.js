import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
//import bg from '../../../../assets/images/dystopia/overgrowth/Dystopia6B.jpg'

const Page6B_2 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia6B.jpg';

    const [showResponse, setShowResponse] = useState(false);

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/dystopia/6B_3'>
                <p className='dystopia__text--clickable'>>>></p>
            </Link>
        </div>
    );
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two women' />
            <div className='page__footer--dystopia'>
            <Typed
                    className='utopia__text'
                    strings={['Looks like you could use a rest, I would go to the Bunker District, back through the hole in the fence. They could use more scavengers if you’d like a job, too?']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                />
                <br></br>
                <br></br>
                <div className='right-align'>
                    <Typed
                        className='utopia__text--speaker2'
                        strings={['Yeah, we got the East Side handled. The Monona Bunker could definitely use more hands, what with the Landfill out there.']}
                        typeSpeed={t.typeSpeed}
                        startDelay={10500}
                        showCursor={false}
                        onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                    />
                </div>
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );
};

export { Page6B_2 };