import { BehaviorSubject } from "rxjs";
import { useEffect, useState } from "react";

export let tasks = [
   {id: 3000, name: 'Faire les courses', done: false},
   {id: 4000, name: 'Faire a manger', done: true}
];

export const tasks$ = new BehaviorSubject(tasks);

export const fetchTasks = () => {
   fetch('/api/tasks', {
      method: 'get',
      headers: {
         'Accept': 'application/ld+json'
      }
   })
      .then(response => response.json())
      .then(datas => datas['hydra:member'])
      .then(fetchedTasks => {
      for (let task of fetchedTasks) {
         tasks.push(task);
      }
      tasks$.next(tasks);
   })
}

export const handleAdd = (text) => {
   let task = {
      id: Date.now(),
      name: text,
      done: false
   }
   fetch('/api/tasks', {
      method: 'post',
      headers: {
         'Content-Type': 'application/ld+json',
      },
      body: JSON.stringify(task)
   })
      .then(response => response.json())
      .then(createdTask => {
         task.id = createdTask.id;
         tasks.push(task);
         tasks$.next(tasks);
      })
}

export const handleChange = (id) => {
   const task = tasks.find(t => t.id === id);

   if (task) {
      fetch('/api/tasks/' + id, {
         method: 'patch',
         headers: {
            'Content-Type': 'application/merge-patch+json',
         },
         body: JSON.stringify({done: !task.done})
      }).then(() => {
         task.done = !task.done;
         tasks$.next(tasks);
      })
   }
}

export const handleDelete = (id) => {
   const index = tasks.findIndex(task => task.id === id);

   if (index !== -1) {
      fetch('/api/tasks/' + id, {
         method: 'delete'
      }).then(() => {
         tasks.splice(index, 1);
         tasks$.next(tasks);
      })
   }
}


export const useTasks = () => {
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
      tasks$.subscribe(taches => setTasks([...taches]))
   }, []);
   return tasks;
}