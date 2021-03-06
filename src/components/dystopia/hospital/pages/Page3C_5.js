import React, { useEffect, useState } from 'react';

import { Dialogue, LinkButton } from '../../../common';

const Page3C_5 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/hospital/Dystopia3C.jpg';

    const [toggle, setToggle] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setToggle(2);
        }, 5000);
    }, []);

    const renderFooter = () => (
        <Dialogue
            theme='dystopia'
            bottom
            messages={[
                { speaker: 'HDS Guard "Moore"', message: 'Why are you still standing here? Move on and f*ck off.' }
            ]}
        />
    );

    const renderButton = () => (
        <LinkButton title='entrance' link='/dystopia/4C' top='75vh' left='73vw' width='20vw'/>
    );

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two armed guards stand near a hospital entrance' />
            {toggle === 1 ? renderFooter() : null}
            {toggle === 2 ? renderButton() : null}
        </div>
    );
};

export { Page3C_5 };