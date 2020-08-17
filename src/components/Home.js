import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>    
            <p>Choose your future</p>
            <Link to='/utopia'>Utopia</Link>
            <Link to='/dystopia'>Dystopia</Link>
        </div>
    );
};
