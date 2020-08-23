import React from 'react';

import { Dialogue } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/7L3_UTOPIA.jpg'

const Page7L_3A = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Receptionist at desk' />
            <Dialogue
                theme='utopia'
                bottom
                messages={[
                    { speaker: 'Receptionist', message: 'Welcome to Choose Your Time! Do you have an appointment?' }
                ]}
                responses={[
                    { link: '/utopia/7L_3B', message: '"No, I don’t. But what do you all do here? I saw an older person get picked up by your bus."' },
                    { link: '/utopia/7L_3B', message: 'Um… maybe?'}
                ]}
            />
        </div>
    );
};

export { Page7L_3A };