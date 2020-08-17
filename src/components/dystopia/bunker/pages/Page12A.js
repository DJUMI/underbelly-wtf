import React from 'react';
import { Link } from 'react-router-dom';

const Page12A = () => {
    return (
        <div>
            <p>Page 12A</p>
            <Link to='/dystopia/8A'>go to 8A</Link>
            <Link to='/dystopia/13A'>go to 13A</Link>
        </div>
    );
};

export { Page12A };