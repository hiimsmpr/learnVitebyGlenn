import { useState } from 'react'

export default function TaskForm({ onAddTask }) {
  // Controlled input so tests can verify typed and submitted value behavior.
  const [taskName, setTaskName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const cleanName = taskName.trim()
    if (!cleanName) return

    onAddTask(cleanName)
    setTaskName('')
  }

  return (
    <form onSubmit={handleSubmit} className="row">
      <label htmlFor="task-name">Task name</label>
      <input
        id="task-name"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        placeholder="Type a task"
      />
      <button type="submit">Add Task</button>
    </form>
  )
}
