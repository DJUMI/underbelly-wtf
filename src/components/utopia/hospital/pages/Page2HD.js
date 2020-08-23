import React from 'react';

import { Dialogue } from '../../../common';

import bg from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'

const Page2HD = () => {
   
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Nurse in Hospital Room' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Nurse', message: 'Oh! Silly me. In cases of trauma or direct injuries, we are able to remove the memories from patients to help alleviate their pain. They can then choose to watch the memory in our MRS, or Memory Recovery System, as a viewer versus a participant to learn from that memory. Many patients choose to then discard their memory forever. Would you like to view your memory?' },
                ]}
                responses={[
                    { link: '/utopia/2H1_4', message: '"Yes, please."' },
                    { link: '/utopia/3H', message: '"I think I\'m okay, thanks!"' }
                ]}
            />
        </div>
    );
};

export { Page2HD };