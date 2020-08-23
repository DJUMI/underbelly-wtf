import React from 'react';

import { Dialogue } from '../../../common';
import bg from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'

const Page2HB = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Nurse in Hospital Room' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Nurse', message: 'You’re in the hospital. You hit your head pretty hard out there but your companion told us you lost consciousness. Pretty scary stuff if you ask me! But anyhoo, would you like to view your accident?' }
                ]}
                responses={[
                    { link: '/utopia/2HC', message: '"Um, what? I don’t understand."' }
                ]}
            />
        </div>
    );
};

export { Page2HB };