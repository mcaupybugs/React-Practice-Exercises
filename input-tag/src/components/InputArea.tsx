import React, {useState} from 'react';
import Tags from './Tags.tsx';

const InputArea = () => {
    const [tagList, setTagList] = useState(['first', 'second']);
    const addTag = (event) =>{
        if(event.key === 'Enter'){
        console.log(event.target.value);
            setTagList([...tagList, event.target.value]);
            event.target.value = ''
        }
    }

    const deleteTag = (event) => {
        console.log(event);
        setTagList(tagList.filter((_, i) => i !== event));
    }

    return <div className='bg-gray-100 mt-20 border border-2 border-solid inline-block p-4 w-64'>
            <div>
            {tagList.map((item, index)=> (
                <Tags key={index} tag={item} deleteFn={deleteTag}></Tags>
            ))}
            </div>
            <div>
                <input type='text' className='border border-solid border-black rounded-md p-2' placeholder='Enter tag' onKeyDown={addTag}></input>
            </div>
        </div>
}

export default InputArea;