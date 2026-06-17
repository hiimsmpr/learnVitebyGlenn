import { useState } from 'react'

export default function AddTopicForm({ onAddTopic }) {
  // Form input state for a controlled component.
  const [topicName, setTopicName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const cleanName = topicName.trim()
    if (!cleanName) return

    onAddTopic(cleanName)
    setTopicName('')
  }

  return (
    <form onSubmit={handleSubmit} className="row">
      <input
        value={topicName}
        onChange={(event) => setTopicName(event.target.value)}
        placeholder="Add a study topic"
      />
      <button type="submit">Add</button>
    </form>
  )
}
