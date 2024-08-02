import React from 'react';
import Block from './Block.tsx';

const List = ({listArray, ondragstart, ondragend}) => {
    return (
        <div>
        <div className='flex flex-col gap-2'>
        {listArray.map((item, index)=> (
                <Block itemKey={index} itemName={item} onDrag = {ondragstart} onDragEnd={ondragend}></Block>
            ))}
        </div>
        </div>
    )
}

export default List;