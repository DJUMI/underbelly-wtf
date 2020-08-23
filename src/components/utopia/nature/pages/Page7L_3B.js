import React from 'react';

import { Dialogue } from '../../../common';
import bg from '../../../../assets/images/utopia/nature/7L3_UTOPIA.jpg'

const Page7L_3B = () => {
  
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Receptionist at desk' />
            <Dialogue
                theme='utopia'
                bottom
                messages={[
                    { speaker: 'Receptionist', message: 'Well, we’re so happy to have you today! Our main service is Peaceful Passing for those who are over 92 years of age. Our other service is Tree Transformation. Many families choose to have their passed family transformed into beautiful trees to live out the rest of eternity. It’s really a beautiful thing we’re doing here.' }
                ]}
                responses={[
                    { link: '/utopia/7L_2', message: '"That is super cool."' },
                    { link: '/utopia/7L_2', message: 'That’s... unsettling.'}
                ]}
            />
        </div>
    );
};

export { Page7L_3B };