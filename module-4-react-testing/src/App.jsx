import { useState } from 'react'
import TaskCounter from './components/TaskCounter'
import TaskForm from './components/TaskForm'

export default function App() {
  const [tasks, setTasks] = useState(['Review testing basics'])

  function handleAddTask(newTask) {
    setTasks((prev) => [...prev, newTask])
  }

  function handleDeleteTask(taskText) {
    setTasks((prev) => prev.filter((task) => task !== taskText))
  }

  return (
    <div className="layout">
      <h1>Module 4 Starter: React Testing</h1>

      <TaskCounter />

      <section className="card">
        <h2>Task Form Demo</h2>
        <TaskForm onAddTask={handleAddTask} />

        <ul>
          {tasks.map((task) => (
            <li key={task} className="row">
              <span>{task}</span>
              <button onClick={() => handleDeleteTask(task)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
