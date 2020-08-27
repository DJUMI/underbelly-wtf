import React from 'react';

import { Dialogue } from '../../../common';
 
const Page11C_2 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/sick/Dystopia9C_2.jpg';
    
    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Close up of doctor' />
            <Dialogue
                theme='dystopia'
                bottom
                messages={[
                    { speaker: 'Female Doctor', message: 'We currently have open beds and are actively treating patients. People are afraid of what they do not understand. It\'s safer for everyone to keep the illusion going for the time being. The Hospital District has worked hard to get so many people under their thumb and they won’t give up their power peacefully.' },
                    { speaker: '', message: 'I promise, we are planning for the future; It’s not all bleak. Several Bunker Districts Leaders are working to unite to start a much-needed revolution, but it’s too risky right now.  But while you are here, I would like to give you the vaccine so you can no longer contract the plague or infect others. Do you consent?' }
                ]}
                responses={[
                    { link: '/dystopia/11C_3', message: '"Yes, of course!"'},
                    { link: '/dystopia/12C', message: '"I’m sorry but I would like to leave. It’s not right that you’re keeping the vaccine a secret when people are dying and living in such poor conditions."'}
                ]}
            />
        </div>
    );
};

export { Page11C_2 };