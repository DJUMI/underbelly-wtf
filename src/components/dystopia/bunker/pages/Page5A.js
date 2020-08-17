import React from 'react';
import { Link } from 'react-router-dom';

const Page5A = () => {
    return (
        <div>
            <p>Page 5A</p>
            <Link to='/dystopia/5A1'>go to 5A1</Link>
            <Link to='/dystopia/5A'>go to 5A</Link>
        </div>
    );
};

export { Page5A };