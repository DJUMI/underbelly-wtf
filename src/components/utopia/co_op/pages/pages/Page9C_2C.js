import React from 'react';

import { DownButton, Dialogue } from '../../../common';
import bg from '../../../../assets/images/utopia/co_op/9C2_UTOPIA.jpg'

//TODO: fade out dialgoue
const Page9C_2C = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hallway' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Robot', message: 'One pasta sauce coming right up!' }
                ]}
            />
            <DownButton link='/utopia/9C_tom' />
        </div>
    );
};

export { Page9C_2C };