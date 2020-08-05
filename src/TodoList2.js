import React from 'react';
import Task from "./Task";
 
const ToDoList2 = (props) => {
  return (
    <ul>
      {
        props.tasks.map(task =>        
            <Task key={task.id} id={task.id} name={task.name}/>
        )
      }
    </ul>
  )
};
 
export default ToDoList2;