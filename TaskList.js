// TaskList.js
import React from 'react';
import { getData } from './localStorage'; // Import the helper function

function TaskList() {
  // Retrieve task data from localStorage
  const savedTasks = getData('tasks') || [];

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {savedTasks.map((task, index) => (
          <li key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
