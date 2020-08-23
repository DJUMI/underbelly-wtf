import React from 'react';

import { Dialogue } from '../../../common';
import bg from '../../../../assets/images/utopia/co_op/6C_UTOPIA_FACECHANGE.jpg'

const Page6CC = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two people sitting in a living room' />
            <Dialogue
                theme='utopia'
                buttonLink='/utopia/7C'
                messages={[
                    { speaker: 'Housemate', message: 'That would explain why you’re still wearing your hospital gown! But I don’t think I’ve ever had any memories removed. Well, not since the giant purge but that doesn’t really count.' }
                ]}
            />
        </div>
    );
};

export { Page6CC };