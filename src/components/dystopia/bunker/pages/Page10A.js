import React from 'react';

import { Dialogue, MapButton } from '../../../common';

const Page10A = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia9A_2.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Room with bed and computer' />
            <Dialogue
                theme='dystopia'
                messages={[
                    { speaker: '* *', message: '“Looks like my dollar bills don’t have any value here. Trade is the currency.”' }
                ]}
            />
            <MapButton />
        </div>
    );
};

export { Page10A };