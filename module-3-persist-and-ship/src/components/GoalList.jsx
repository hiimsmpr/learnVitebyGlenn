import GoalItem from './GoalItem'

export default function GoalList({ goals, onToggleGoal, onDeleteGoal, onEditGoal }) {
  if (goals.length === 0) {
    return <p className="card">No goals yet. Add your first goal above.</p>
  }

  return (
    <ul className="goal-list card">
      {/* Render each goal row and pass handlers down as props. */}
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onToggleGoal={onToggleGoal}
          onDeleteGoal={onDeleteGoal}
          onEditGoal={onEditGoal}
        />
      ))}
    </ul>
  )
}
