import React, { useContext, useState } from 'react';
import { DispatchContext, HandleContext } from '../Context/Contex';
import { getNextid } from '../utils';

const AddTask = () => {
    const [text, setText] = useState('');
    const dispatch = useContext(DispatchContext)
    const task = useContext(HandleContext)
    return (
        <div>
            <input placeholder='Add Task' value={text} onChange={(e)=> setText(e.target.value) } >
            </input>
            <button
             onClick={() => { setText('')
              dispatch({
                type: "added",
                text, 
                id: getNextid(task)
              })  }} >Add</button>
        </div>
    );
};

export default AddTask;