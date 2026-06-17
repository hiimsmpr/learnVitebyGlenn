// 02: Arrays, objects, map/filter/find, destructuring, and spread.

const topics = [
  { id: 1, name: 'Variables', completed: true },
  { id: 2, name: 'Functions', completed: false },
  { id: 3, name: 'Arrays', completed: false }
]

const topicNames = topics.map((topic) => topic.name)
const incompleteTopics = topics.filter((topic) => !topic.completed)
const functionsTopic = topics.find((topic) => topic.name === 'Functions')

const [firstTopic] = topics
const { id, name } = firstTopic

const addedTopic = { id: 4, name: 'Objects', completed: false }
const updatedTopics = [...topics, addedTopic]

const updatedFirstTopic = { ...firstTopic, completed: false }

console.log('Topic names:', topicNames)
console.log('Incomplete topics:', incompleteTopics)
console.log('Found topic:', functionsTopic)
console.log('First topic id and name:', id, name)
console.log('Updated topics length:', updatedTopics.length)
console.log('Updated first topic copy:', updatedFirstTopic)
