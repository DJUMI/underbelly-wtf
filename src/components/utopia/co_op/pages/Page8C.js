import React from 'react';

import { Dialogue, LinkButton } from '../../../common';
import bg from '../../../../assets/images/utopia/co_op/8C_UTOPIA.jpg'

const Page8C = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two people sitting in a room' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Housemate', message: 'That was kind of the purpose of the Giant Purge, to forget. Ha Ha.' },
                    { speaker: '', message: 'But we were just finishing up our flatmate meeting which we’ll forgive you for missing this time. But could you go out to the garden to grab us a tomato? Friend here is going to make us pasta for dinner!' }
                ]}
            />
            <LinkButton title='bug' link='/utopia/9C' top='81vh' left='38.5vw' width='10vw' />
        </div>
    );
};

export { Page8C };