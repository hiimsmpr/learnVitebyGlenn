import { useState } from 'react'

export default function GoalForm({ onAddGoal }) {
  // Controlled input state for the new goal text.
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const cleanText = text.trim()
    if (!cleanText) return

    onAddGoal(cleanText)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="row card">
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Add a new study goal"
      />
      <button type="submit">Add Goal</button>
    </form>
  )
}
