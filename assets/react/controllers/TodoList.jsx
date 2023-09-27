import React, { Component } from "react";
import { fetchTasks, tasks, useTasks } from "../../rxjs";
import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";

const TodoList = () => {

   const tasks = useTasks();

   return (
      <div className="container-todolist">
         <h1>Todolist React Rxjs</h1>
         <button onClick={fetchTasks}>fetch</button>
         {tasks.map(t => (
            <TodoItem task={t} key={t.id}/>
         ))}

         <TodoForm/>
      </div>
   );
}
export default TodoList;