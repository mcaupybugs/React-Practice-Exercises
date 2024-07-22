import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './common.css'

const Header = () => {
    const {pathname} = useLocation();
    const [header, setHeader] = useState(pathname);

    useEffect(()=>{
        console.log(pathname);
        setHeader(pathname)
    },[pathname])

    return (
        <div className='h-24 w-full flex flex-row gap-8 justify-between text-3xl font-thin'>
            <div className='flex-1 place-content-center justify-self-end'><Link className={header==="/" ? "active": ""}to="/">Stopwatch</Link></div>
            <div className='flex-1 place-content-center justify-self-start'><Link className={header==="/timer" ? "active": ""} to="/timer">Timer</Link></div>
        </div>
    )
}

export default Header;