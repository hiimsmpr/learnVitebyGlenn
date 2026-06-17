export default function ApiUsers({ users, loading, error }) {
  if (loading) return <p>Loading users...</p>
  if (error) return <p>{error}</p>

  return (
    <ul>
      {users.slice(0, 5).map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
