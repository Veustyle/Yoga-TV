import React, { useState } from "react";
import { handleAdd } from "../../rxjs";

export const TodoForm = () => {

   const [ texte, setTexte ] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();
      handleAdd(texte);
      setTexte('');
   }

   return (
      <form className="todo-form" onSubmit={handleSubmit}>
         <input type="text" placeholder='Ajoutez une tâche' value={texte} onChange={e => setTexte(e.target.value)} />
         <button onClick={handleSubmit}>Ajouter</button>
      </form>
   );
}