import React from 'react';

const Tags = ({tag, deleteFn}) => {
    return (
        <div className='bg-black text-white p-2 m-4 rounded-md inline-block' onClick={deleteFn}>
            <div>&#x2716; {tag}</div>
        </div>
    )
}

export default Tags;