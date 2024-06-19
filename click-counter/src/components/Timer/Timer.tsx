import React from 'react';

const Timer = (props) => {
    return (
        <div>
            <p className='text-7xl text-white'>Timer : {props.timerCount}</p>
        </div>
    )
}

export default Timer;