import React from 'react';
import { Link } from 'react-router-dom';

import { Dialogue } from '../../../common';

const Page3A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia3A.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Computer Screen' />
            <Dialogue 
                theme='dystopia'
                bottom={false}
                button={false}
                messages={[
                    { speaker: 'HDS Guard "Moore"', message: 'I see. In that case, we will open the bunker doors for you. Once you enter, you will be required to undergo a brief health evaluation. Please proceed down the stairs to the Medic Chamber.' }
                ]}
                responses={[
                    { link: '/dystopia/4A', message: '"Thank you...?"' }
                ]}
            />
            <Link to='/dystopia'>
                <div className='clickable dystopia__button--exit' />
            </Link>
        </div>
    );
};

export { Page3A };