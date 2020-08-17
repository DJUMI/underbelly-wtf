import React from 'react';
import { Link } from 'react-router-dom';

const Page13A = () => {
    return (
        <div>
            <p>Page 13A</p>
            <Link to='/dystopia/13A1'>go to 13A1</Link>
            <Link to='/dystopia/13A2'>go to 13A2</Link>
            <Link to='/dystopia/14A'>go to 14A</Link>
        </div>
    );
};

export { Page13A };