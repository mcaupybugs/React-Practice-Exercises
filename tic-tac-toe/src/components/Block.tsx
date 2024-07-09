import React, {useState} from 'react';

const Block = ({value, onClick}) => {
    return (
        <div className='h-24 w-24 bg-purple-700 flex items-center justify-center'>
            <p className='text-7xl'>{value}</p>
        </div>
    )
}

export default Block;