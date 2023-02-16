import React, { useState, useContext } from 'react';
import { useTodo } from '../context';

function AddTodo() {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '') {
      return;
    }
    addTodo({
      title: title,
      completed: false
    });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
