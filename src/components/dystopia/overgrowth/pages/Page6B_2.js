import React from 'react';

import { Dialogue } from '../../../common';

const Page6B_2 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/dystopia/overgrowth/Dystopia6B.jpg';

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Two women' />
            <Dialogue
                theme='dystopia'
                bottom
                button
                buttonLink='/dystopia/6B_3'
                messages={[
                    { speaker: 'Speaker1', message: 'Looks like you could use a rest, I would go to the Bunker District, back through the hole in the fence. They could use more scavengers if you’d like a job, too?' },
                    { speaker: 'Speaker2', message: 'Yeah, we got the East Side handled. The Monona Bunker could definitely use more hands, what with the Landfill out there.' }
                ]}
            />
        </div>
    );
};

export { Page6B_2 };