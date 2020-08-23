import React from 'react';

import { Dialogue } from '../../../common';
import bg from '../../../../assets/images/utopia/co_op/7C_UTOPIA.jpg'

const Page7C = () => {
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Looking down at your gown' />
            <Dialogue
                theme='utopia'
                button
                buttonLink='/utopia/7C'
                responses={[
                    { link: '/utopia/8C', message: '"Yeah... I forgot I was wearing it. What do you mean giant purge?"'},
                    { link: '/utopia/8C', message: '"I forgot about the giant purge…"'}
                ]}
            />
        </div>
    );
};

export { Page7C };