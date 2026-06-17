export default function TopicList({ topics, onDeleteTopic }) {
  if (topics.length === 0) {
    return <p>No topics yet. Add one above.</p>
  }

  return (
    <ul>
      {/* Map state array to UI list items using stable keys. */}
      {topics.map((topic) => (
        <li key={topic.id} className="row">
          <span>{topic.name}</span>
          <button onClick={() => onDeleteTopic(topic.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
