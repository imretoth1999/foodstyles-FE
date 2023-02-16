import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import { TodoProvider } from './context';

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Todo List</h1>
        <AddTodo />
        <Filters />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
