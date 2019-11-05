import React from 'react';

import './Todo.css'

const Todo = props => {
  return (
    <div
      className={`item${props.todo.completed ? ' completed' : ''}`}
      onClick={() => props.toggleCompleted(props.todo.id)}
    >
      <p>{props.todo.item}</p>
    </div>
  );
};

export default Todo;