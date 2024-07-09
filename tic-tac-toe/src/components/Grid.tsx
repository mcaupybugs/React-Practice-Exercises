import React from 'react';
import Block from './Block.tsx';

const Grid = ({squares, onClick}) =>{
    return (
        <div className='grid grid-rows-3 grid-cols-3 gap-0 w-64 place-items-center pt-20'>
            {squares.map((square, index) => (
                <Block key={index} value={square} onClick={() => onClick(index)}/>
            ))}
        </div>
    )
}

export default Grid;