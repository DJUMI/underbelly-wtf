import React from 'react';

import { Dialogue } from '../../../common';

import bg from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'

const Page2H15 = () => {
 
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Nurse in Hospital Room' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Nurse', message: 'Now, would you like to reinsert your memories or would you like them discarded? I am obligated to tell you that you may experience headaches for a few days after reinsertion.' }
                ]}
                responses={[
                    { link: '/utopia/2H16_20', message: '"I’ll have them reinserted, please."'},
                    { link: '/utopia/3H', message: '"I don’t need them, I saw enough."'}
                ]}
            />
        </div>
    );
};

export { Page2H15 };