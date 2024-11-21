import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Toggle task completion
  const toggleTask = (taskId) => {
    setTasks(
        tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        )
    );
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-96 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Simple To-Do App</h1>
          <TaskInput onAddTask={addTask} />
          <TaskList
              tasks={tasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
          />
        </div>
      </div>
  );
}

export default App;
