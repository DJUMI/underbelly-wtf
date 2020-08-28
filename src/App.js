import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AudioContext from './context/AudioContext';
import PlayerContext from './context/PlayerContext';
import ErrorPage from './components/ErrorPage';
import UtopiaStart from './components/utopia/hospital/UtopiaStart';
import DystopiaStart from './components/dystopia/bunker/DystopiaStart';
import DystopiaBegin from './components/dystopia/bunker/DystopiaBegin';
import * as l from './components/landing/pages';
import * as d1 from './components/dystopia/bunker/pages';
import * as d2 from './components/dystopia/overgrowth/pages';
import * as d3 from './components/dystopia/hospital/pages';
import * as d4 from './components/dystopia/sick/pages';
import * as u1 from './components/utopia/hospital/pages';
import * as u2 from './components/utopia/nature/pages';
import * as u3 from './components/utopia/co_op/pages';

const App = () => {
    return (
        <PlayerContext>
            <AudioContext>
                <BrowserRouter>
                    <Switch>
                        {/* Landing */}
                        <Route exact path='/' component={l.PageLP1} />
                        <Route exact path='/LP2' component={l.PageLP2} />
                        <Route exact path='/LP3' component={l.PageLP3} />
                        <Route exact path='/LP4' component={l.PageLP4} />
                        <Route exact path='/LP5' component={l.PageLP5} />
                        <Route exact path='/credits' component={l.Credits} />
                        <Route exact path='/jukebox' component={l.Jukebox} />

                        <Route exact path='/utopia' component={UtopiaStart} />
                        <Route exact path='/dystopia' component={DystopiaStart} />
                        <Route exact path='/dystopia/begin' component={DystopiaBegin} />

                        {/* Utopia Hospital Chapter */}
                        <Route exact path='/utopia/2HA' component={u1.Page2HA} />
                        <Route exact path='/utopia/2HB' component={u1.Page2HB} />
                        <Route exact path='/utopia/2HC' component={u1.Page2HC} />
                        <Route exact path='/utopia/2HD' component={u1.Page2HD} />
                        <Route exact path='/utopia/2H1_4' component={u1.Page2H1_4} />
                        <Route exact path='/utopia/2H5' component={u1.Page2H5} />
                        <Route exact path='/utopia/2H6' component={u1.Page2H6} />
                        <Route exact path='/utopia/2H7' component={u1.Page2H7} />
                        <Route exact path='/utopia/2H8' component={u1.Page2H8} />
                        <Route exact path='/utopia/2H9' component={u1.Page2H9} />
                        <Route exact path='/utopia/2H10_14' component={u1.Page2H10_14} />
                        <Route exact path='/utopia/2H15' component={u1.Page2H15} />
                        <Route exact path='/utopia/2H16_20' component={u1.Page2H16_20} />
                        <Route exact path='/utopia/3H' component={u1.Page3H} />

                        {/* Utopia Nature Chapter */}
                        <Route exact path='/utopia/1L' component={u2.Page1L} />
                        <Route exact path='/utopia/2L_1' component={u2.Page2L_1} />
                        <Route exact path='/utopia/2L_2' component={u2.Page2L_2} />
                        <Route exact path='/utopia/3L_1' component={u2.Page3L_1} />
                        <Route exact path='/utopia/3L_1_squirrel' component={u2.Page3L_1_squirrel} />
                        <Route exact path='/utopia/3L_2' component={u2.Page3L_2} />
                        <Route exact path='/utopia/3L_4' component={u2.Page3L_4} />
                        <Route exact path='/utopia/3L_5' component={u2.Page3L_5} />
                        <Route exact path='/utopia/4L' component={u2.Page4L} />
                        <Route exact path='/utopia/4L_1' component={u2.Page4L_1} />
                        <Route exact path='/utopia/5_6L' component={u2.Page5_6L} />
                        <Route exact path='/utopia/7L' component={u2.Page7L} />
                        <Route exact path='/utopia/7L_1' component={u2.Page7L_1} />
                        <Route exact path='/utopia/7L_2' component={u2.Page7L_2} />
                        <Route exact path='/utopia/7L_3A' component={u2.Page7L_3A} />
                        <Route exact path='/utopia/7L_3B' component={u2.Page7L_3B} />
                        <Route exact path='/utopia/7L_5' component={u2.Page7L_5} />
                        <Route exact path='/utopia/7L_7' component={u2.Page7L_7} />
                        <Route exact path='/utopia/7L_8' component={u2.Page7L_8} />

                        {/* Utopia Co op Chapter */}
                        <Route exact path='/utopia/1C' component={u3.Page1C} />
                        <Route exact path='/utopia/2C' component={u3.Page2C} />
                        <Route exact path='/utopia/3C' component={u3.Page3C} />
                        <Route exact path='/utopia/4C' component={u3.Page4C} />
                        <Route exact path='/utopia/5C' component={u3.Page5C} />
                        <Route exact path='/utopia/6CA' component={u3.Page6CA} />
                        <Route exact path='/utopia/6CB' component={u3.Page6CB} />
                        <Route exact path='/utopia/6CC' component={u3.Page6CC} />
                        <Route exact path='/utopia/7C' component={u3.Page7C} />
                        <Route exact path='/utopia/8C' component={u3.Page8C} />
                        <Route exact path='/utopia/9C' component={u3.Page9C} />
                        <Route exact path='/utopia/9C_tom' component={u3.Page9C_tom} />
                        <Route exact path='/utopia/9C_1A' component={u3.Page9C_1A} />
                        <Route exact path='/utopia/9C_1B' component={u3.Page9C_1B} />
                        <Route exact path='/utopia/9C_2A' component={u3.Page9C_2A} />
                        <Route exact path='/utopia/9C_2B' component={u3.Page9C_2B} />
                        <Route exact path='/utopia/9C_2C' component={u3.Page9C_2C} />
                        <Route exact path='/utopia/9C_4' component={u3.Page9C_4} />
                        <Route exact path='/utopia/9C_4A' component={u3.Page9C_4A} />
                        <Route exact path='/utopia/9C5_7' component={u3.Page9C5_7} />
                        <Route exact path='/utopia/10C' component={u3.Page10C} />

                        {/* Dystopia Bunker Chapter */}
                        <Route exact path='/dystopia/1A' component={d1.Page1A} />
                        <Route exact path='/dystopia/2A' component={d1.Page2A} />
                        <Route exact path='/dystopia/3A' component={d1.Page3A} />
                        <Route exact path='/dystopia/4A' component={d1.Page4A} />
                        <Route exact path='/dystopia/4A_1' component={d1.Page4A_1} />
                        <Route exact path='/dystopia/5A' component={d1.Page5A} />
                        <Route exact path='/dystopia/5A_A' component={d1.Page5A_A} />
                        <Route exact path='/dystopia/5A1_A' component={d1.Page5A1_A} />
                        <Route exact path='/dystopia/5A1_B' component={d1.Page5A1_B} />
                        <Route exact path='/dystopia/5A1_C' component={d1.Page5A1_C} />
                        <Route exact path='/dystopia/5A2' component={d1.Page5A2} />
                        <Route exact path='/dystopia/6A' component={d1.Page6A} />
                        <Route exact path='/dystopia/7A' component={d1.Page7A} />
                        <Route exact path='/dystopia/8A' component={d1.Page8A} />
                        <Route exact path='/dystopia/9A' component={d1.Page9A} />
                        <Route exact path='/dystopia/9A_1' component={d1.Page9A_1} />
                        <Route exact path='/dystopia/9A_2' component={d1.Page9A_2} />
                        <Route exact path='/dystopia/10A' component={d1.Page10A} />
                        <Route exact path='/dystopia/11A' component={d1.Page11A} />
                        <Route exact path='/dystopia/12A' component={d1.Page12A} />
                        <Route exact path='/dystopia/13A' component={d1.Page13A} />
                        <Route exact path='/dystopia/13A_1' component={d1.Page13A_1} />
                        <Route exact path='/dystopia/13A_2' component={d1.Page13A_2} />

                        {/* Dystopia Overgrowth Chapter */}
                        <Route exact path='/dystopia/1B' component={d2.Page1B} />
                        <Route exact path='/dystopia/2B' component={d2.Page2B} />
                        <Route exact path='/dystopia/3B' component={d2.Page3B} />
                        <Route exact path='/dystopia/3B_1' component={d2.Page3B_1} />
                        <Route exact path='/dystopia/4B' component={d2.Page4B} />
                        <Route exact path='/dystopia/4B_1' component={d2.Page4B_1} />
                        <Route exact path='/dystopia/5B' component={d2.Page5B} />
                        <Route exact path='/dystopia/6B_1' component={d2.Page6B_1} />
                        <Route exact path='/dystopia/6B_2' component={d2.Page6B_2} />
                        <Route exact path='/dystopia/6B_3' component={d2.Page6B_3} />

                        {/* Dystopia Hospital Chapter */}
                        <Route exact path='/dystopia/1C' component={d3.Page1C} />
                        <Route exact path='/dystopia/1CA' component={d3.Page1CA} />
                        <Route exact path='/dystopia/2C' component={d3.Page2C} />
                        <Route exact path='/dystopia/3C_1' component={d3.Page3C_1} />
                        <Route exact path='/dystopia/3C_2' component={d3.Page3C_2} />
                        <Route exact path='/dystopia/3C_3' component={d3.Page3C_3} />
                        <Route exact path='/dystopia/3C_4' component={d3.Page3C_4} />
                        <Route exact path='/dystopia/3C_5' component={d3.Page3C_5} />
                        <Route exact path='/dystopia/4C' component={d3.Page4C} />
                        <Route exact path='/dystopia/5C_1' component={d3.Page5C_1} />
                        <Route exact path='/dystopia/5C_2' component={d3.Page5C_2} />
                        <Route exact path='/dystopia/5C_3' component={d3.Page5C_3} />
                        <Route exact path='/dystopia/5C_4' component={d3.Page5C_4} />
                        <Route exact path='/dystopia/5C_5' component={d3.Page5C_5} />
                        <Route exact path='/dystopia/5C_6' component={d3.Page5C_6} />
                        <Route exact path='/dystopia/5C_7' component={d3.Page5C_7} />
                        <Route exact path='/dystopia/6C' component={d3.Page6C} />
                        <Route exact path='/dystopia/7C' component={d3.Page7C} />

                        {/* Dystopia Sick District Chapter */}
                        <Route exact path='/dystopia/9C' component={d4.Page9C} />
                        <Route exact path='/dystopia/10C' component={d4.Page10C} />
                        <Route exact path='/dystopia/11C' component={d4.Page11C} />
                        <Route exact path='/dystopia/11C_1' component={d4.Page11C_1} />
                        <Route exact path='/dystopia/11C_2' component={d4.Page11C_2} />
                        <Route exact path='/dystopia/11C_3' component={d4.Page11C_3} />
                        <Route exact path='/dystopia/11C_4' component={d4.Page11C_4} />
                        <Route exact path='/dystopia/11C_5' component={d4.Page11C_5} />
                        <Route exact path='/dystopia/12C' component={d4.Page12C} />

                        <Route path='/' component={ErrorPage} />
                    </Switch>
                </BrowserRouter>
            </AudioContext>
        </PlayerContext>
    );
};

export default App;