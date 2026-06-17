// 04: async/await, try/catch, fetch, and JSON handling.

async function loadUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    const users = await response.json()
    console.log('First three users:', users.slice(0, 3).map((user) => user.name))

    const asText = JSON.stringify(users[0])
    const parsedBack = JSON.parse(asText)
    console.log('First user name from JSON round-trip:', parsedBack.name)
  } catch (error) {
    console.error('Failed to load users:', error.message)
  }
}

loadUsers()
