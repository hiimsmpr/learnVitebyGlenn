import { useState } from 'react'

export default function TaskCounter() {
  // State under test: count should change when buttons are clicked.
  const [count, setCount] = useState(0)

  return (
    <section className="card">
      <h2>Task Counter</h2>
      <p aria-label="task-count">Current count: {count}</p>
      <div className="row">
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  )
}
