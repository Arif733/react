// src/App.js
import React, { useState } from 'react';
import Authentication from './Authentication';
import TaskList from './TaskList';
import TaskCreation from './TaskCreation';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskData) => {
    setTasks([...tasks, taskData]);
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <Authentication />
      <TaskCreation addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
