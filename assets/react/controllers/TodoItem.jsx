import React from "react";
import { handleChange, handleDelete } from "../../rxjs";

export const TodoItem = (props) => {

   return (
      <div className='todo-item'>
         <input onChange={() => handleChange(props.task.id)} type="checkbox" checked={props.task.done} />
         <p>{props.task.name}</p>
         <button onClick={() => handleDelete(props.task.id)}>X</button>
      </div>
   );
}