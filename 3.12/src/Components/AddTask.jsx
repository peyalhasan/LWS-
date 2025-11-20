import React, { useState } from 'react';

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    return (
        <div>
            <input placeholder='Add Task' value={text} onChange={(e)=> setText(e.target.value) } >
            </input>
            <button
             onClick={() => { setText('')
                onAdd(text)}} >Add</button>
        </div>
    );
};

export default AddTask;