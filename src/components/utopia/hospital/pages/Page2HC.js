import React from 'react';

import { Dialogue } from '../../../common';

import bg from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'

const Page2HC = () => {

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Nurse in Hospital Room' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Nurse', message: 'Looks like you\'re experiencing some side effects, which is perfectly normal. Many individuals suffer from long term memory loss after traumatic experiences. But getting patients up to speed after memory loss is one of my favorite parts of the job!' },
                    { speaker: '', message: 'After the president was booted from office, our leaders enacted the Companionship Project to help fight the loneliness pandemic. Now everyone receives their own companion to always be by their side, in happiness, and in health. It’s simply an added bonus that they are adorable.'}
                ]}
                responses={[
                    { link: '/utopia/2HD', message: '"That’s wonderful and all but, I was more wondering what you meant by ‘view my accident’."' }
                ]}
            />
        </div>
    );
};

export { Page2HC };