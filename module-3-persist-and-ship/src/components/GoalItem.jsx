import { useState } from 'react'

export default function GoalItem({ goal, onToggleGoal, onDeleteGoal, onEditGoal }) {
  // Local edit mode state for this row only.
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(goal.text)

  function handleSave() {
    const cleanText = draft.trim()
    if (!cleanText) return
    onEditGoal(goal.id, cleanText)
    setIsEditing(false)
  }

  return (
    <li className="goal-item">
      <label className="row grow">
        <input
          type="checkbox"
          checked={goal.completed}
          onChange={() => onToggleGoal(goal.id)}
        />

        {isEditing ? (
          <input
            className="grow"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
          />
        ) : (
          <span className={goal.completed ? 'done grow' : 'grow'}>{goal.text}</span>
        )}
      </label>

      <div className="row">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
      </div>
    </li>
  )
}
