# Module 2 (2 Hours): React Core Skills for Real Projects

Audience: Beginner (new to JavaScript and React)

Goal: Build confidence with reusable components, props, lists, forms, effects, and fetching API data.

Starter code is already included in this folder, so you can run it immediately.

JavaScript note: if any syntax here feels unfamiliar, use Module 0 as your reference (`module-0-javascript-foundations`).

---

## Run The Starter Code

From this folder (`module-2-react-core-skills`):

Why run `npm install` first:

- It installs the project dependencies listed in `package.json`.
- It creates `node_modules`, which includes tools and libraries used by `npm run dev`.
- If you skip it, the development server will fail because required packages are not present.

```bash
npm install
npm run dev
```

Open the local URL printed in terminal.

---

## Self-Study Mode (No Assumptions)

Use this section if you are learning on your own.

### Step 1: Install Tools (One Time)

1. Install Node.js LTS from https://nodejs.org
2. Install VS Code from https://code.visualstudio.com
3. Restart your computer after install

### Step 2: Open This Project Folder

1. Open VS Code.
2. Click File > Open Folder.
3. Select `module-2-react-core-skills`.
4. Open Terminal in VS Code:
  - Terminal > New Terminal

### Step 3: Verify Node and npm

```bash
node -v
npm -v
```

If you see version numbers, continue.

### Step 4: Install Dependencies

```bash
npm install
```

Why:

- Installs libraries required by the app.
- Creates `node_modules`.

### Step 5: Start the App

```bash
npm run dev
```

Open the local URL in terminal (often `http://localhost:5173`).

### Step 6: Daily Start/Stop

Start:

```bash
npm run dev
```

Stop:

- Press Control + C in terminal.

Note: You usually run `npm install` only once for this project, unless dependencies change.

### If You Get Stuck

1. Confirm you are in `module-2-react-core-skills`.
2. Re-run `npm install`.
3. Read the first error line in terminal and search it directly.
4. If npm is missing, reinstall Node.js LTS.

---

## Why This Module

After you know setup/routes/state, the next important skills are:

1. Breaking UI into reusable components
2. Passing data with props
3. Rendering dynamic lists
4. Handling form input
5. Loading data from an API with `useEffect`

These are core skills they will use in almost every React project.

---

## Learning Outcomes

By the end, you should be able to:

1. Create and reuse components.
2. Pass and read props.
3. Render arrays with `.map()`.
4. Build controlled form inputs using state.
5. Fetch and display external data.
6. Understand basic project structure for growth.

---

## Prerequisites

0. Complete Module 0 (`module-0-javascript-foundations`) first.
1. Complete Module 1 first.
2. Be comfortable running `npm install` and `npm run dev`.
3. Know basic JavaScript arrays, functions, objects.

## Vite CLI: Do You Need To Install It?

Short answer: usually no.

Recommended (no global install):

```bash
npm create vite@latest my-first-vite-react-app -- --template react
```

Why this works:

- `npm create vite@latest` fetches and runs the Vite scaffolding tool for one command.
- This is beginner-friendly and avoids global version conflicts.

Optional global install:

```bash
npm install -g create-vite
create-vite my-first-vite-react-app --template react
```

---

## 2-Hour Self-Study Plan

Module 0 references for this plan (`module-0-javascript-foundations`):

- 0:00-0:20 -> Arrays, objects, destructuring, template literals
- 0:20-0:50 -> Functions, arrow functions, objects, destructuring
- 0:50-1:20 -> Arrays (`map`), callbacks, event object (`event.target.value`), conditionals
- 1:20-1:45 -> Async (`async/await`), `fetch`, `try/catch`, JSON
- 1:45-2:00 -> Array and object update patterns with spread syntax

### 0:00-0:20 - JavaScript Warmup for React

What to understand:

- Array `.map()`: transforms each item in an array into a new value.
- Object properties: store related values in key/value format (example: `{ id: 1, name: 'Pen' }`).
- Destructuring: pulls values out of objects or arrays into variables.
- Template literals: create strings with variables using backticks and `${value}`.

Example:

```js
const products = [
  { id: 1, name: 'Notebook' },
  { id: 2, name: 'Pen' }
]

const names = products.map((p) => p.name)
```

See Module 0: [Functions](../module-0-javascript-foundations/README.md#m0-functions), [Arrays](../module-0-javascript-foundations/README.md#m0-arrays), [Objects](../module-0-javascript-foundations/README.md#m0-objects), and [Template Literals](../module-0-javascript-foundations/README.md#m0-template-literals).

### 0:20-0:50 - Components + Props

Suggested structure:

- `src/components/Header.jsx`
- `src/components/Card.jsx`
- `src/components/ProductList.jsx`

`Card.jsx` example:

```jsx
export default function Card({ title, children }) {
  return (
    <section style={{ border: '1px solid #ddd', padding: '12px', marginBottom: '8px' }}>
      <h3>{title}</h3>
      {children}
    </section>
  )
}
```

See Module 0: [Functions](../module-0-javascript-foundations/README.md#m0-functions), [Destructuring](../module-0-javascript-foundations/README.md#m0-destructuring), and [Import/Export modules](../module-0-javascript-foundations/README.md#m0-import-export).

What this means:

- Props are inputs to a component, like function arguments.
- Smaller components are easier to test, reuse, and debug.
- `children` lets one component wrap and display nested content from another component.
- A reusable component is like a template you can use multiple times with different props.

### 0:50-1:20 - Lists + Event Handling + Forms

`ProductList.jsx` example:

```jsx
export default function ProductList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
```

See Module 0: [Arrays](../module-0-javascript-foundations/README.md#m0-arrays), [Callbacks](../module-0-javascript-foundations/README.md#m0-callbacks), and [Spread syntax](../module-0-javascript-foundations/README.md#m0-spread).

Controlled form in `App.jsx`:

```jsx
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')

  return (
    <form>
      <label>Product Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter product"
      />
      <p>Preview: {name}</p>
    </form>
  )
}
```

See Module 0: [Variables](../module-0-javascript-foundations/README.md#m0-variables), [Functions](../module-0-javascript-foundations/README.md#m0-functions), [Callbacks](../module-0-javascript-foundations/README.md#m0-callbacks), and [Event object basics](../module-0-javascript-foundations/README.md#m0-event-object).

Important beginner note:

- `onChange={(e) => setName(e.target.value)}` means: "when input text changes, save the new text into state."
- `e` is the browser event object, and `e.target.value` is what the user typed.

What this means:

- A controlled input uses React state as the single source of truth for the field value.
- `onChange` runs on each keystroke and updates state, keeping UI and data in sync.
- `key={item.id}` helps React track each list item correctly when list data changes.

### 1:20-1:45 - `useEffect` + API Fetching

Example in `App.jsx`:

```jsx
import { useEffect, useState } from 'react'

export default function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error('Failed to fetch users:', error)
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

See Module 0: [Variables](../module-0-javascript-foundations/README.md#m0-variables), [Functions](../module-0-javascript-foundations/README.md#m0-functions), [Arrays](../module-0-javascript-foundations/README.md#m0-arrays), [Async JavaScript](../module-0-javascript-foundations/README.md#m0-async), and [JSON](../module-0-javascript-foundations/README.md#m0-json).

Important beginner note:

- `async/await` is a way to wait for data from the internet.
- `fetch(...)` asks an API for data.
- `response.json()` converts response text into JavaScript objects/arrays.

What this means:

- `useEffect` is used for side effects, such as fetching data from an API.
- An empty dependency array `[]` runs the effect once when the component first appears.
- Loading and error states prevent broken or confusing UI while data is being fetched.
- If you fetch data directly in the component body (outside `useEffect`), it can run repeatedly and cause loops.

### 1:45-2:00 - Project Structure + Recap

Suggested beginner structure:

- `src/components/`
- `src/pages/`
- `src/hooks/` (later)
- `src/services/` (API helpers, later)

Self-check questions:

1. Why do we split UI into components?
2. Why must list items have `key`?
3. When does `useEffect` run?

---

## Homework (Night 2)

Build a small app called **Study Tracker**.

Requirements:

1. Create at least 3 reusable components.
2. Show a list of study topics from state.
3. Add a form to create a new topic.
4. Add a delete button per topic.
5. Fetch a list of users or posts from `jsonplaceholder` and display at least 5 items.
6. Show loading text while data is fetching.

Stretch goals:

- Add simple filter input (search topics)
- Save topic list to `localStorage`

---

## Common Beginner Mistakes

1. Forgetting `key` in list rendering
2. Writing `onClick={myFunction()}` when they meant `onClick={myFunction}`
3. Putting async logic directly in component body (causes loops)
4. Missing dependency array understanding in `useEffect`
5. Not handling loading state before data arrives

---

## Practice Checklist

Before finishing this module, you should be able to:

- Explain props in one sentence
- Build a controlled input
- Render a list from state
- Fetch API data with `useEffect`
- Split one big component into 2-3 smaller components
