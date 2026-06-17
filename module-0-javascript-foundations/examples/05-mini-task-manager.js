// 05: Practical mini app logic in plain JavaScript.

let tasks = [
  { id: 1, text: 'Read variables section', completed: true },
  { id: 2, text: 'Practice arrow functions', completed: false }
]

function addTask(text) {
  const cleanText = text.trim()
  if (!cleanText) return

  tasks = [...tasks, { id: Date.now(), text: cleanText, completed: false }]
}

function toggleTask(taskId) {
  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  )
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId)
}

function summary() {
  const completed = tasks.filter((task) => task.completed).length
  const remaining = tasks.length - completed
  return { total: tasks.length, completed, remaining }
}

console.log('Initial summary:', summary())
addTask('Use map/filter in one exercise')
console.log('After add:', summary())

const firstId = tasks[0]?.id
if (firstId) {
  toggleTask(firstId)
  console.log('After toggle first task:', summary())
}

const secondId = tasks[1]?.id
if (secondId) {
  deleteTask(secondId)
  console.log('After delete second task:', summary())
}

console.log('Final tasks:', tasks)
