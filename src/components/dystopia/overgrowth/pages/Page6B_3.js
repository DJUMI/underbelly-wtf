import React, { useContext, useEffect } from 'react';

import { Dialogue } from '../../../common';
import { Context as PlayerContext } from '../../../../context/PlayerContext';

const Page6B_3 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia6B.jpg';
    const { getHouse } = useContext(PlayerContext);

    useEffect(() => {
        getHouse();
    },[]);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two women' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Person 2', message: 'Heads up since you seem new to this area, avoid the Hospital District if you can.' },
                    { speaker: 'Person 1', message: 'They’ve built what they refer to as a ‘Utopia’ over there. It’s freaky if you ask me. It’s all doublespeak and alternative facts.' }
                ]}
                responses={[
                    { link: '/dystopia/1B', message: '"Thanks for the heads up! And sorry for interrupting your scavenging."'}
                ]}
            />
        </div>
    );
};

export { Page6B_3 };