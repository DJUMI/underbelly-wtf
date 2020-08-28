import React from 'react';

import { Dialogue } from '../../../common';
import bg from '../../../../assets/images/utopia/hospital/2H_UTOPIA.jpg'

const Page2HA = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Nurse in Hospital Room' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Nurse', message: 'Good morning friend, so happy you’re finally awake. How are you feeling?' }
                ]}
                responses={[
                    { link: '/utopia/2HB', message: '"I feel fine … where am I?"' }
                ]}
            />
        </div>
    );
};

export { Page2HA };