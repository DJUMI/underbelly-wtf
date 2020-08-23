import React, { useEffect, useState } from 'react';

import { Dialogue, LinkButton } from '../../../common';
import bg1 from '../../../../assets/images/utopia/hospital/2H_UTOPIAp_FACECHANGE.jpg'
import bg2 from '../../../../assets/images/utopia/hospital/2H2_UTOPIA.jpg'
import bg3 from '../../../../assets/images/utopia/hospital/2H3_UTOPIA.jpg'
import bg4 from '../../../../assets/images/utopia/hospital/2H4_UTOPIA.jpg'

const Page2H1_4 = () => {
    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 5000);

        setTimeout(() => {
            setActivePanel(3);
        }, 10000);

        setTimeout(() => {
            setActivePanel(4);
        }, 20000);
    }, []);

    const render2H1 = () => (
        <div className={`page--transition ${activePanel === 1 ? 'active' : ''}`}>
            <img className='page__image' src={bg1} alt='Nurse in Hospital Room' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Nurse', message: 'Great! Let me set it up for you.' },
                ]}
            />
        </div>
    );

    const render2H2 = () => (
        <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
            <img className='page__image' src={bg2} alt='Nurse inserting video into tv' />
        </div>
    );

    const render2H3 = () => (
        <div className={`page--transition ${activePanel === 3 ? 'active' : ''}`}>
            <img className='page__image' src={bg3} alt='Nurse exiting the room' />
            <Dialogue
                theme='utopia'
                messages={[
                    { speaker: 'Nurse', message: 'Alright, I\'ll be right outside the door. Click start on the remote when you\'re ready.' },
                ]}
            />
        </div>
    );

    const render2H4 = () => (
        <div className={`page--transition ${activePanel === 4 ? 'active' : ''}`}>
            <img className='page__image' src={bg4} alt='TV remote' />
        </div>
    );

    const renderButton = () => (
        <LinkButton title='remote' link='/utopia/2H5' top='29vh' left='41vw' width='10vw' />
    );



    return (
        <div className='page'>
            {render2H1()}
            {render2H2()}
            {render2H3()}
            {render2H4()}
            {activePanel === 4 ? renderButton() : null}
        </div>
    );
};

export { Page2H1_4 };