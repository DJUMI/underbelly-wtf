import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import bg1 from '../../../../assets/images/landing/end.png';

const Page4B_1 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia4B_1.jpg';

    const [activePanel, setActivePanel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(2);
        }, 10000);
    }, []);

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Woman attacking you with machete' />
            <div className={`page--transition ${activePanel === 2 ? 'active' : ''}`}>
                <img className='page__image' src={bg1} alt='Game Over' />
                <Link to='/LP5'>
                    <div className='LP__text_container--end'>
                        <span className='LP__text'>Try again?</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export { Page4B_1 };