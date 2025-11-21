import React, {  useState } from 'react';
import { DispatchContext, HandleContext, useTask, useTaskDispatch } from '../Context/Contex';
import { getNextid } from '../utils';

const AddTask = () => {
    const [text, setText] = useState('');
    const dispatch = useTaskDispatch(DispatchContext)
    const task = useTask(HandleContext)
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