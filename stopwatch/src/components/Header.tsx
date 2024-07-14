import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='h-24 w-full flex flex-row gap-10 justify-center text-4xl'>
            <Link className="gap-4" to="/">Stopwatch</Link>
            <Link to="/timer">Timer</Link>
        </div>
    )
}

export default Header;