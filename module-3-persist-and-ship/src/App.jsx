import GoalForm from './components/GoalForm'
import GoalList from './components/GoalList'
import useLocalStorageState from './hooks/useLocalStorageState'

const defaultGoals = [
  { id: 1, text: 'Review React state', completed: false },
  { id: 2, text: 'Practice editing a goal', completed: true }
]

export default function App() {
  // Shared app state lives at the top-level parent component.
  const [goals, setGoals] = useLocalStorageState('study_goals_v1', defaultGoals)

  function handleAddGoal(text) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: Date.now(), text, completed: false }
    ])
  }

  function handleToggleGoal(goalId) {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
      )
    )
  }

  function handleDeleteGoal(goalId) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId))
  }

  function handleEditGoal(goalId, newText) {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId ? { ...goal, text: newText } : goal
      )
    )
  }

  const completedCount = goals.filter((goal) => goal.completed).length
  const remainingCount = goals.length - completedCount

  return (
    <div className="layout">
      <header className="card">
        <h1>Module 3 Starter: Persist and Ship</h1>
        <p>CRUD app + localStorage + custom hook + deploy-ready build.</p>
      </header>

      <section className="card row stats">
        <p>Total: {goals.length}</p>
        <p>Completed: {completedCount}</p>
        <p>Remaining: {remainingCount}</p>
      </section>

      <GoalForm onAddGoal={handleAddGoal} />

      <GoalList
        goals={goals}
        onToggleGoal={handleToggleGoal}
        onDeleteGoal={handleDeleteGoal}
        onEditGoal={handleEditGoal}
      />
    </div>
  )
}
