import React, { useContext } from 'react';
import Task from './Task';
import { HandleContext } from '../Context/Contex';

const TaskList = () => {

    const tasks = useContext(HandleContext)

    return (
        <div>
            <ul>
                {
                    tasks.map(task=> <Task key={task.id} task={task} /> )
                }
            </ul>
        </div>
    );
};

export default TaskList;