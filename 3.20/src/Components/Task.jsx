import React, { useContext, useState } from 'react';
import { DispatchContext } from '../Context/Contex';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(DispatchContext)

    const handleEditSave = () => {
        setIsEditing(!isEditing)
    }

    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input value={task.text} onChange={(e) => 
                dispatch({
                    type: 'changed',
                    task: {
                    ...task,
                    text: e.target.value,
                    }
                })
                } />
                <button onClick={handleEditSave} >Save</button>
            </>
        )
    }
    else {
        taskContent = (
            <> <h2>{task.text}</h2>
                <button onClick={handleEditSave

                } >Edit</button>
            </>
        )
    }

    return (
        <div>
            <li >
                <label style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <input type="checkbox" checked={task.done} onChange={() => 
                    dispatch({
                        type: 'changed',
                        task})
                    } />
                    {taskContent}
                    <button onClick={() => dispatch({
                        type: 'deleted',
                        id: task.d
                    })

                    } > Delete</button>
                </label>
            </li>
        </div>
    );
};

export default Task;