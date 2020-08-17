import React from 'react';
import { Link } from 'react-router-dom';

const Page6A = () => {
    return (
        <div>
            <p>Page 6A</p>
            <Link to='/dystopia/7A'>go to 7A</Link>
            <Link to='/dystopia'>go to dystopia start</Link>
        </div>
    );
};

export { Page6A };