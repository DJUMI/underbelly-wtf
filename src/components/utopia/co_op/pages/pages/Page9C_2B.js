import React from 'react';

import { Dialogue } from '../../../common';
import bg from '../../../../assets/images/utopia/co_op/9C2_UTOPIA.jpg'

const Page9C_2B = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Hallway' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Robot', message: 'Hello friend. Do you need any cooking assistance? I would love to help!' }
                ]}
                responses={[
                    { link: '/utopia/9C_2C', message: 'Give tomato' },
                    { link: '/utopia/9C_2A', message: '"No thank you!"' }
                ]}
            />
        </div>
    );
};

export { Page9C_2B };