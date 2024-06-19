import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer.tsx'

const HomePage = () => {

    const [click, setClick] = useState(0);
    const [seconds, setSeconds] = useState(10);
    const [isRunning, setIsRunning] = useState(false);

    const IncreaseClickCount = () => {
        if(isRunning){
            setClick(click+1);
        }
    }

    const reset = () => {
        setClick(0);
        setSeconds(10);
    }

    const startTimer = () => {
        setIsRunning(true);
    }

    useEffect(() => {
        let interval;
        if (isRunning && seconds > 0) {
        interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
          }, 1000);
        }else if (seconds === 0){
            setIsRunning(false);
        }
          return () => clearInterval(interval);
      }, [isRunning, seconds]);

    return (
        <div className='bg-black h-screen w-full grid place-items-center'>
            <div className='flex flex-col h-screen justify-between gap-10'>
                <div className='pt-4'>
                <Timer className="justify-start" timerCount={seconds}></Timer>
                </div>
                <div className='flex justify-center'>
                <p className='text-9xl justify-center align-middle items-center place-self-center text-white'>{click}</p>
                </div>
                <div className='flex flex-col gap-5'>
                <button onClick={startTimer} className='bg-yellow-400 h-20 w-40 place-self-center rounded-md'>start</button>
                <button onClick={IncreaseClickCount} className="bg-cyan-600 h-20 w-40 place-self-center rounded-md">click me</button>
                <button onClick={reset} className="bg-pink-400 h-20 w-40 place-self-center rounded-md">reset</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;