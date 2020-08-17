import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import t from '../../../../constants/text';
import bg10 from '../../../../assets/images/utopia/hospital/2H10_UTOPIA.jpg'
import bg11 from '../../../../assets/images/utopia/hospital/2H11_UTOPIA.jpg'
import bg12 from '../../../../assets/images/utopia/hospital/2H12_UTOPIA.jpg'
import bg13 from '../../../../assets/images/utopia/hospital/2H13_UTOPIA.jpg'
import bg13_bubble from '../../../../assets/images/utopia/hospital/2H13_UTOPIA_BUBBLE.jpg'
import bg14 from '../../../../assets/images/utopia/hospital/2H14_UTOPIA.jpg'


const Page2H10_14 = () => {
    const [activePanel, setActivePanel] = useState(10);
    const [showResponse, setShowResponse] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActivePanel(11);
        }, 15000);

        setTimeout(() => {
            setActivePanel(12);
        }, 23000);

        setTimeout(() => {
            setActivePanel(13);
        }, 36000);

        setTimeout(() => {
            setActivePanel(14);
        }, 44000);
    }, []);

    const render2H10 = () => (
        <div className={`page--transition ${activePanel === 10 ? 'active' : ''}`}>
            <img className='page__image' src={bg10} alt='Two people staring down at you from above' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Oh shit! Dude you hit this person right on their head with the ball."']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                />
                <br></br>
                <br></br>
                <div className='right-align'>
                    <Typed
                        className='utopia__text--speaker2'
                        strings={['"Let\'s wait here until the ambulance arrives. Their companion is already contacting the ambulance."']}
                        typeSpeed={t.typeSpeed}
                        showCursor={false}
                        startDelay={5000}
                    />
                </div>
            </div>
        </div>
    );

    const render2H11 = () => (
        <div className={`page--transition ${activePanel === 11 ? 'active' : ''}`}>
            <img className='page__image' src={bg11} alt='Companion sending out an alert signal' />
        </div>
    );

    const render2H12 = () => (
        <div className={`page--transition ${activePanel === 12 ? 'active' : ''}`}>
            <img className='page__image' src={bg12} alt='Two people conversing above' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Remember when ambulances used to cost money?"']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    startDelay={24000}
                />
                <br></br>
                <br></br>
                <div className='right-align'>
                    <Typed
                        className='utopia__text--speaker2'
                        strings={['"Yeah what the hell was that?? I\'m glad the United Nations got rid of currency."']}
                        typeSpeed={t.typeSpeed}
                        showCursor={false}
                        startDelay={28000}
                    />
                </div>
            </div>
        </div>
    );

    const render2H13 = () => (
        <div className={`page--transition ${activePanel === 13 ? 'active' : ''}`}>
            <img className='page__image' src={bg13} alt='Memory over' />
            <div className={`page--slow ${activePanel === 13 ? 'active' : ''}`}>
                <img className='page__image' src={bg13_bubble} alt='Memory over and a thought bubble' />
            </div>
            <div className='page__header--utopia'>
                <div className='fade-in'>
                    <p className='utopia__text--mono'>"...wait where are the flowers I picked?"</p>
                </div>
            </div>
        </div>
    );

    const render2H14 = () => (
        <div className={`page--transition ${activePanel === 14 ? 'active' : ''}`}>
            <img className='page__image' src={bg14} alt='Nurse popping head into room' />
            <div className='page__header--utopia'>
                <Typed
                    className='utopia__text'
                    strings={['"Still going or done?"']}
                    typeSpeed={t.typeSpeed}
                    showCursor={false}
                    startDelay={45000}
                    onComplete={() => setTimeout(() => { setShowResponse(true) }, 1000)}
                />
                {showResponse ? renderResponse() : <p className='utopia__text--blank'>></p>}
            </div>
        </div>
    );

    const renderResponse = () => (
        <div className='fade-in'>
            <Link className='text__link' to='/utopia/2H15'>
                <p className='utopia__text--clickable'>> "It's done!"</p>
            </Link>
        </div>
    );


    return (
        <div className='page'>
            {render2H10()}
            {render2H11()}
            {render2H12()}
            {render2H13()}
            {render2H14()}
        </div>
    );
};

export { Page2H10_14 };