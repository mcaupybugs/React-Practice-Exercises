import React, {useState} from 'react';

const Block = ({value, onClick}) => {
    return (
        <div className='h-24 w-24 bg-purple-700 flex items-center justify-center border-black border-solid border-2 rounded-sm'>
            <button className='text-7xl h-24 w-24' onClick={onClick}>{value}</button>
        </div>
    )
}

export default Block;