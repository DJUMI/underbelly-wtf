import React, { useContext } from 'react';

import { LinkButton } from '../../../common';
import { Context as PlayerContext } from '../../../../context/PlayerContext';

const Page4A_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia4A_1.jpg';
    const { state } = useContext(PlayerContext);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Top of stairs down to door that leads inside of bunker' />
            {state.hasMap ?
                <LinkButton title='bunker-door' link='/dystopia/8A' color='red' top='68vh' left='43.44vw' width='15vw'/> :
                <LinkButton title='bunker-door' link='/dystopia/5A' color='red' top='68vh' left='43.44vw' width='15vw'/>
            }
        </div>
    );
};

export { Page4A_1 };