import React, { useState } from 'react';

function TaskCreation() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');

  const handleCreateTask = () => {
    // You can directly perform actions with the task data here if needed
    const taskData = {
      title,
      description,
      dueDate,
      priority,
    };
    console.log('Task created:', taskData);

    // Clear input fields by updating state (optional)
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('low');
  };

  return (
    <div>
      <h2>Create Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        placeholder="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
}

export default TaskCreation;

