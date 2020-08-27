import React, { useContext } from 'react';

import { LinkButton } from '../../../common';
import { Context as PlayerContext } from '../../../../context/PlayerContext';
import bg from '../../../../assets/images/utopia/nature/7L5_UTOPIA.jpg'

const Page7L_5 = () => {
    const { state } = useContext(PlayerContext);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Van that has logo "Choose your time"' />
            {state.hasChoose ? <LinkButton title='bug' link='/utopia/7L_8' top='0vh' left='44vw' width='10vw' /> : <LinkButton title='bug' link='/utopia/7L_2' top='0vh' left='44vw' width='10vw' />}
        </div>
    );
};

export { Page7L_5 };