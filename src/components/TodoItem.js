import React, { useContext } from 'react';
import { useTodo } from '../context';

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo } = useTodo();

  const handleCheckboxChange = (event) => {
    updateTodo({
      id: todo.id,
      title: todo.title,
      completed: event.target.checked
    });
  };

  const handleDeleteClick = () => {
    deleteTodo({
      id: todo.id
    });
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleCheckboxChange} />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default TodoItem;
