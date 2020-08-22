import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';

const Page11C_3 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_3.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <div className='page__header--dystopia'>
                <Typed
                    className='dystopia__text'
                    strings={['"There, that wasn’t so bad, was it? Now, you are welcome to stay here and look around or continue exploring the outside. There are communities on the West Side that are starting back up again, secretly, all with vaccines. Or, you can help out the Bunker Districts."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                />
                <br></br>
                <br></br>
                <Typed
                    className='dystopia__text'
                    strings={['"You cannot return to the Hospital District, though. They will kill you if they see you. Do you understand? Good."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    startDelay={16000}
                />
                <p className='dystopia__text'>fin.</p>
            </div>
        </div>
    );
};

export { Page11C_3 };