import logo from './logo.svg';
import styles from './App.module.css';

import { createSignal } from "solid-js";

function App() {
  const [tasks, setTasks] = createSignal([]);
  const [newTask, setNewTask] = createSignal("");

  const addTask = () => {
    if (newTask().trim()) {
      setTasks([...tasks(), newTask().trim()]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks()];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <input
        type="text"
        value={newTask()}
        onInput={(e) => setNewTask(e.currentTarget.value)}
        placeholder="Add new task..."
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks().map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;