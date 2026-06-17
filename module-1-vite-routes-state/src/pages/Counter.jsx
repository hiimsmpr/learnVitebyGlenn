import { useState } from 'react'

export default function Counter() {
  // useState returns the current value and an updater function.
  const [count, setCount] = useState(0)

  return (
    <main>
      <h2>Counter Page</h2>
      <p>Current count: {count}</p>

      <div className="button-row">
        {/* Each click updates state, and React re-renders the UI. */}
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </main>
  )
}
