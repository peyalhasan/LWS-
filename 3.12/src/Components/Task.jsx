import React, { useState } from 'react';

const Task = ({ task , onChangeTask, onDeleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditSave = () =>{
        setIsEditing(!isEditing)
    }

    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input value={task.text} onChange={(e) => onChangeTask({
                    ...task,
                    text: e.target.value
                }) } />
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
            <li>
                <label>
                    <input type="checkbox" checked={task.done} onChange={(e)=> onChangeTask({
                        ...task,
                        done: e.target.checked
                    })} />
                        {taskContent}
                    <button onClick={()=> onDeleteTask(task.id)} > Delete</button>
                </label>
            </li>
        </div>
    );
};

export default Task;