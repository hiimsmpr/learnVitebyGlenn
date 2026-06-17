# Module 1 (2 Hours): Vite Setup, React Routing, and State

Audience: Beginner (new to JavaScript and React)

Goal: By the end of this module, you can create a React app with Vite, navigate between pages, and manage local component state.

Starter code is already included in this folder, so you can run it immediately.

JavaScript note: if any syntax here feels unfamiliar, study Module 0 first (`module-0-javascript-foundations`).

---

## Run The Starter Code

From this folder (`module-1-vite-routes-state`):

Why run `npm install` first:

- It reads `package.json` and downloads all required packages for the project.
- It creates the `node_modules` folder so commands like `npm run dev` can use Vite and React.
- Without it, the app cannot start because dependencies are missing.

```bash
npm install
npm run dev
```

Open the local URL printed in terminal.

---

## Self-Study Mode (No Assumptions)

Use this section if you are learning alone and only know basic computer use.

### Step 1: Install Tools (One Time)

1. Install Node.js LTS from https://nodejs.org
2. Install VS Code from https://code.visualstudio.com
3. Restart your computer after install (helps PATH update on some systems)

### Step 2: Open This Project Folder

1. Open VS Code.
2. Click File > Open Folder.
3. Choose this folder: `module-1-vite-routes-state`.
4. Open Terminal in VS Code:
  - Top menu: Terminal > New Terminal

### Step 3: Confirm Node and npm Work

Run:

```bash
node -v
npm -v
```

If both show version numbers, continue.

### Step 4: Install Project Dependencies

Run:

```bash
npm install
```

What this does:

- Downloads required packages listed in `package.json`.
- Creates the `node_modules` folder.

### Step 5: Start the Learning App

Run:

```bash
npm run dev
```

Then:

1. Find the local URL printed in terminal (usually `http://localhost:5173`).
2. Hold Command (Mac) or Control (Windows) and click it.
3. Your browser opens the app.

### Step 6: When You Are Done for the Day

1. In terminal, press Control + C to stop the server.
2. Close VS Code.

### Step 7: Next Day Resume

1. Re-open the same folder in VS Code.
2. Open terminal.
3. Run:

```bash
npm run dev
```

You do not need to run `npm install` every day. Run it again only if `package.json` changed.

### If You Get Stuck

1. Read the exact terminal error message.
2. Copy the error and search it exactly.
3. Check that you are inside `module-1-vite-routes-state` before running commands.
4. If `npm` is not found, reinstall Node.js LTS and restart.

---

## Learning Outcomes

By the end, you should be able to:

1. Explain what Vite and React each do.
2. Create and run a React app with Vite.
3. Add multiple pages using React Router.
4. Use `useState` to track and update UI values.
5. Build a simple multi-page app with interactive state.

---

## Prerequisites (Before Class)

0. Complete Module 0 (`module-0-javascript-foundations`) first.
1. Install Node.js LTS from the official website.
2. Verify install:

```bash
node -v
npm -v
```

If those print versions, you are ready.

## Vite CLI: Do You Need To Install It?

Short answer: usually no.

Recommended (no global install):

```bash
npm create vite@latest my-first-vite-react-app -- --template react
```

Why this works:

- `npm create vite@latest` downloads and runs the latest Vite scaffolding tool for that command.
- It avoids managing a separate global CLI version.

Optional global install (if you want a global command):

```bash
npm install -g create-vite
create-vite my-first-vite-react-app --template react
```

---

## 2-Hour Self-Study Plan

Module 0 references for this plan (`module-0-javascript-foundations`):

- 0:00-0:20 -> Variables, functions, arrow functions, arrays, objects, import/export, template literals
- 0:20-0:45 -> Functions, command arguments, modules (`import`/`export`)
- 0:45-1:20 -> Functions, callbacks, event basics, objects
- 1:20-1:50 -> Variables, function calls, callbacks, conditionals

### 0:00-0:20 - JavaScript + React Basics

Understand these quick ideas first:

- Variables: `let` creates a value you can reassign later, while `const` creates a value that should not be reassigned.
- Functions and arrow functions: both are reusable blocks of code; arrow functions are a shorter syntax often used in React.
- Arrays and objects: arrays store ordered lists, while objects store named properties (key/value pairs).
- Import/export basics: `export` shares code from one file, and `import` brings that code into another file.
- JSX: lets you write HTML-like UI code inside JavaScript, which React turns into real browser elements.

Mini example:

```js
const user = { name: 'Ari' }
const greeting = `Hello, ${user.name}`
```

See Module 0: [Arrays](../module-0-javascript-foundations/README.md#m0-arrays), [Objects](../module-0-javascript-foundations/README.md#m0-objects), and [Template Literals](../module-0-javascript-foundations/README.md#m0-template-literals).

### 0:20-0:45 - Install and Run Vite React App

1. Create the app:

```bash
npm create vite@latest my-first-vite-react-app -- --template react
```

What this command means:

- `npm create vite@latest` runs Vite's project generator.
- `my-first-vite-react-app` is the new folder name.
- `--template react` tells it to create a React project.

2. Move in and install:

```bash
cd my-first-vite-react-app
npm install
```

What this does:

- `cd ...` moves your terminal into the new project folder.
- `npm install` downloads all required packages listed in `package.json`.

3. Run dev server:

```bash
npm run dev
```

What this does:

- Starts a local development server on your computer.
- Lets you see your app in the browser while you code.

4. Open the local URL shown in terminal.

What each file does:

- `index.html`: app entry page
- `src/main.jsx`: React app bootstrap
- `src/App.jsx`: first root component

In plain words:

- `index.html` is the page the browser first loads.
- `src/main.jsx` tells React where to render the app on that page.
- `src/App.jsx` is your main UI component where most beginner work starts.

### 0:45-1:20 - Add Routes (Pages)

Install router:

```bash
npm install react-router-dom
```

Create these files:

- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Counter.jsx`

Home page example:

```jsx
export default function Home() {
  return <h1>Home Page</h1>
}
```

See Module 0: [Functions](../module-0-javascript-foundations/README.md#m0-functions) and [Import/Export modules](../module-0-javascript-foundations/README.md#m0-import-export).

Use router in `src/main.jsx`:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

See Module 0: [Import/Export modules](../module-0-javascript-foundations/README.md#m0-import-export) and [Functions](../module-0-javascript-foundations/README.md#m0-functions).

What these new router parts do:

- `BrowserRouter` turns on page-like navigation without full reloads.
- It watches the URL and tells React which screen to show.

Use routes and links in `src/App.jsx`:

```jsx
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Counter from './pages/Counter'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
        <Link to="/counter">Counter</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  )
}
```

See Module 0: [Functions](../module-0-javascript-foundations/README.md#m0-functions), [Callbacks](../module-0-javascript-foundations/README.md#m0-callbacks), and [Import/Export modules](../module-0-javascript-foundations/README.md#m0-import-export).

What these router pieces mean:

- `Link` creates in-app navigation links.
- `Routes` is a container that checks the current URL.
- `Route` connects one URL path to one component.

### 1:20-1:50 - State with `useState`

In `src/pages/Counter.jsx`:

```jsx
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter Page</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
```

See Module 0: [Variables](../module-0-javascript-foundations/README.md#m0-variables), [Functions](../module-0-javascript-foundations/README.md#m0-functions), [Conditionals](../module-0-javascript-foundations/README.md#m0-conditionals), and [Callbacks](../module-0-javascript-foundations/README.md#m0-callbacks).

What this means:

- `count` = current value
- `setCount` = function to update it
- When state changes, React re-renders UI
- Re-render means React redraws the component with updated values.

### 1:50-2:00 - Recap + Q/A

Self-check questions:

1. What is Vite solving?
2. Why use routes?
3. What happens when state changes?

---

## Homework (Night 1)

Build a 3-page app called **Student Dashboard**.

Required:

1. Pages: Home, Profile, Tasks
2. Navigation links between all pages
3. On Tasks page, add state for:
   - Number of completed tasks
   - Buttons to increase, decrease, reset
4. Add at least one custom style file (`src/App.css` or page-level CSS)
5. Push to GitHub (or save locally with clear folder name)

Stretch goals:

- Add a Not Found page (`*` route)
- Show active route style

---

## Common Beginner Mistakes

1. Forgetting to wrap app in `BrowserRouter`
2. Using `class` instead of `className` in JSX
3. Not importing components before use
4. Trying to mutate state directly instead of calling setter

---

## Quick Command Reference

```bash
# create project
npm create vite@latest my-first-vite-react-app -- --template react

# install dependencies
npm install

# install router
npm install react-router-dom

# start dev server
npm run dev
```

---

## Suggested Review Questions

1. What is the difference between a component and a route?
2. Why is `useState` needed instead of normal variables?
3. What file usually starts the app in Vite React?
