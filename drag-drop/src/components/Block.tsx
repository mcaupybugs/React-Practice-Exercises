import React from 'react';

const Block = ({itemName, onDrag, itemKey, onDragEnd}) =>{
    return (
    <div key={itemKey} className='flex w-24 h-12 rounded-md items-center justify-center bg-blue-300' draggable="true" onDragStart={(event) => { onDrag(event, itemKey)}} onDrop={onDragEnd}>
        {itemName}
    </div>
    )
}

export default Block;