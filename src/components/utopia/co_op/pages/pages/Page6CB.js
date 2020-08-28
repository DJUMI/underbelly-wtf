import React from 'react';

import { Dialogue } from '../../../common';
import bg from '../../../../assets/images/utopia/co_op/6C_UTOPIA_FACECHANGE.jpg'

const Page6CB = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two people sitting in a living room' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Housemate', message: 'Hey, friend! How\'s your head? Our companions told us you got injured pretty bad today and that you even went to the hospital. Is it really as beautiful as everyone says?' }
                ]}
                responses={[
                    { link: '/utopia/6CC', message: '"I think I’m good. Everyone was really nice. But I still feel a little bit fuzzy. Have you ever had a memory removed before?"' }
                ]}
            />
        </div>
    );
};

export { Page6CB };