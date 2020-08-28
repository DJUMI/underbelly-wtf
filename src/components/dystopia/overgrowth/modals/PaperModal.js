import React, { useState } from 'react';

import { ArticleModal } from './ArticleModal';
import { OpenButton } from '../../../common';

const PaperModal = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/bunker/Dystopia2B_newspaper.png';
    
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='modal__container--paper'>
            <img className='modal__image--paper' src={bg} alt='newspaper' />
            {showModal ?  <ArticleModal /> : <OpenButton onClick={() => setShowModal(true)} top='50vh' left='35vw' width='20vw' />}
        </div>
    );
};

export { PaperModal };
