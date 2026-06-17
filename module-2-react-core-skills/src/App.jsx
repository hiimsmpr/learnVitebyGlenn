import { useEffect, useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import AddTopicForm from './components/AddTopicForm'
import TopicList from './components/TopicList'
import ApiUsers from './components/ApiUsers'

const starterTopics = [
  { id: 1, name: 'React components' },
  { id: 2, name: 'Props and state' }
]

export default function App() {
  // Local state for the study topics list.
  const [topics, setTopics] = useState(starterTopics)

  // API state for remote users data.
  const [users, setUsers] = useState([])
  const [loadingUsers, setLoadingUsers] = useState(true)
  const [userError, setUserError] = useState('')

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('Could not load users right now.')
        }
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        setUserError(error.message)
      } finally {
        setLoadingUsers(false)
      }
    }

    // Effect runs once when component mounts.
    loadUsers()
  }, [])

  function handleAddTopic(topicName) {
    setTopics((prevTopics) => [
      ...prevTopics,
      { id: Date.now(), name: topicName }
    ])
  }

  function handleDeleteTopic(topicId) {
    setTopics((prevTopics) => prevTopics.filter((topic) => topic.id !== topicId))
  }

  return (
    <div className="layout">
      <Header />

      <Card title="Study Topics (State + Forms)">
        <AddTopicForm onAddTopic={handleAddTopic} />
        <TopicList topics={topics} onDeleteTopic={handleDeleteTopic} />
      </Card>

      <Card title="Users from API (useEffect + Fetch)">
        <ApiUsers users={users} loading={loadingUsers} error={userError} />
      </Card>
    </div>
  )
}
