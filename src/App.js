import React from 'react';
import TodoList from './components/TodoForm';
import Path from './components/Path';

import './App.css';

function App() {
  return (
    <div className="App">
      <Path />
      <TodoList />
    </div>
  );
}

export default App;
