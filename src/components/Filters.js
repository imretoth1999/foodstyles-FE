import React, { useContext } from 'react';
import { useTodo } from '../context';

function Filters() {
  const { filter, setFilter } = useTodo();

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filters">
      <label>
        <input type="radio" value="all" checked={filter === 'all'} onChange={handleFilterChange} />
        All
      </label>
      <label>
        <input type="radio" value="completed" checked={filter === 'completed'} onChange={handleFilterChange} />
        Completed
      </label>
      <label>
        <input type="radio" value="incompleted" checked={filter === 'incompleted'} onChange={handleFilterChange} />
        Incompleted
      </label>
    </div>
  )
}
export default Filters;


