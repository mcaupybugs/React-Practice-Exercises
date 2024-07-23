import React from 'react';

const Block = ({blockColor}) => {
    return (
        <div className='h-4 w-4 border border-white border-solid' style={{ backgroundColor: blockColor}}>
        </div>
    )
}

export default Block;