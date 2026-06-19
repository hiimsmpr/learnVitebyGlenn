# Module 3 (2 Hours): Build, Persist, and Ship a React App

Audience: Beginner (new to JavaScript and React)

Goal: Move from practice exercises to a small app that stores data and can be deployed.

Starter code is already included in this folder, so you can run it immediately.

JavaScript note: this module uses many JS features. Review Module 0 anytime (`module-0-javascript-foundations`).

---

## Run The Starter Code

From this folder (`module-3-persist-and-ship`):

Why run `npm install` first:

- It installs dependencies from `package.json`.
- It creates `node_modules`, required for Vite and React scripts.
- If skipped, `npm run dev` will fail due to missing packages.

```bash
npm install
npm run dev
```

Open the local URL printed in terminal.

---

## Self-Study Mode (No Assumptions)

Use this if you are learning on your own.

### Step 1: Install Required Tools (One Time)

1. Install Node.js LTS from https://nodejs.org
2. Install VS Code from https://code.visualstudio.com
3. Restart your computer

Windows PC notes:

1. Use default Node.js installer options to add Node/npm to PATH.
2. Open PowerShell and run:

```bash
node -v
npm -v
```

3. If both commands print versions, setup is complete.

### Step 2: Open the Correct Folder

1. Open VS Code.
2. Click File > Open Folder.
3. Select `module-3-persist-and-ship`.
4. Open Terminal in VS Code from Terminal > New Terminal.

Windows PC notes:

1. Use PowerShell terminal in VS Code.
2. Change terminal profile if needed from the dropdown menu.

### Step 3: Check Installation

```bash
node -v
npm -v
```

If both commands show versions, continue.

### Step 4: Install Dependencies

```bash
npm install
```

This downloads required packages and creates `node_modules`.

### Step 5: Run Development Server

```bash
npm run dev
```

Open the local URL printed in terminal.

### Step 6: Build and Preview Production Version

```bash
npm run build
npm run preview
```

This helps you understand the difference between development mode and production build.

### Step 7: End of Session

1. Press Control + C to stop running server.
2. Close VS Code.

### Step 8: Resume Later

1. Re-open `module-3-persist-and-ship`.
2. Run `npm run dev`.

You usually do not need to re-run `npm install` unless project dependencies changed.

---

## Vite CLI: Do You Need To Install It?

Short answer: usually no.

Recommended (no global install):

```bash
npm create vite@latest my-app -- --template react
```

Optional global install:

```bash
npm install -g create-vite
create-vite my-app --template react
```

---

## Learning Outcomes

By the end, you should be able to:

1. Explain lifting state up and when to do it.
2. Build a small CRUD app (create, edit, delete).
3. Persist app data with `localStorage`.
4. Use `useEffect` for load/save side effects.
5. Extract reusable logic into a custom hook.
6. Build and deploy a React app.

Term meanings used in this module:

- CRUD = Create, Read, Update, Delete (the 4 common actions in data apps).
- Persist = keep data saved so it is still there after refresh/restart.
- Deploy = publish your app to the internet so others can open it by URL.

---

## Prerequisites

0. Complete Module 0 (`module-0-javascript-foundations`) first.
1. Complete Module 1 and Module 2.
2. Be comfortable with components, props, state, forms, and `useEffect`.
3. Be able to run `npm install`, `npm run dev`, and `npm run build`.

---

## 2-Hour Self-Study Plan

Module 0 references for this plan (`module-0-javascript-foundations`):

- 0:00-0:20 -> Objects, arrays, callbacks, function parameters
- 0:20-1:00 -> CRUD logic with arrays (`map`, `filter`), conditionals, spread syntax
- 1:00-1:30 -> JSON (`stringify`/`parse`), browser storage concepts, error handling
- 1:30-1:50 -> Functions and reusable logic patterns
- 1:50-2:00 -> Command-line basics and build workflow terms

### 0:00-0:20 - Data Flow Recap + Lifting State Up

What this means:

- Keep shared state in the nearest common parent component.
- Child components receive data and callback functions via props.
- "Lifting state up" means moving state from a child into a parent so multiple children can use the same data.

Mini talking point:

- "If two components need the same data, lift it up."

### 0:20-1:00 - Build CRUD Features (Study Goals)

Build app features:

1. Add a goal
2. Toggle complete/incomplete
3. Edit goal text
4. Delete goal

Use one parent (`App.jsx`) to hold list state and pass handlers into child components.

In plain words:

- The parent stores the main data.
- Child components display data and ask parent to update it using callback functions.

### 1:00-1:30 - Persist Data with localStorage

Focus on two key effects:

1. Load once on first mount
2. Save whenever goals change

Pattern:

```jsx
useEffect(() => {
  const saved = localStorage.getItem('study_goals_v1')
  if (saved) setGoals(JSON.parse(saved))
}, [])

useEffect(() => {
  localStorage.setItem('study_goals_v1', JSON.stringify(goals))
}, [goals])
```

See Module 0: [Async JavaScript](../module-0-javascript-foundations/README.md#m0-async), [JSON](../module-0-javascript-foundations/README.md#m0-json), and [Browser storage](../module-0-javascript-foundations/README.md#m0-local-storage).

What this means:

- `localStorage` stores small text data in the browser.
- `JSON.stringify` turns JavaScript data into text to save.
- `JSON.parse` turns saved text back into JavaScript data.

### 1:30-1:50 - Extract a Custom Hook

Move persistence logic into `useLocalStorageState` hook so `App.jsx` is simpler.

What this means:

- Hooks let us reuse stateful logic.
- Naming convention starts with `use`.
- A custom hook is just a reusable function that uses React hooks inside it.

### 1:50-2:00 - Build + Deploy + Recap

1. Build the app:

```bash
npm run build
```

See Module 0: [Run This Module](../module-0-javascript-foundations/README.md#m0-run-commands) for command-line execution patterns.

2. Preview production build:

```bash
npm run preview
```

See Module 0: [Run This Module](../module-0-javascript-foundations/README.md#m0-run-commands) for command-line execution patterns.

3. Deploy (choose one):
- Vercel
- Netlify

Deploy in plain words:

- Connect your GitHub repo to Vercel or Netlify.
- Click deploy.
- You receive a public URL to share.

Self-check questions:

1. Why lift state up?
2. Why use two effects for localStorage pattern?
3. What is the value of a custom hook?

---

## Homework (Night 3)

Build **Habit Tracker**.

Requirements:

1. Create habits with a form.
2. Toggle done/not done.
3. Edit habit names.
4. Delete habits.
5. Persist habits in localStorage.
6. Show summary counts:
   - Total habits
   - Completed habits
   - Remaining habits
7. Deploy and share live URL.

Stretch goals:

- Add filter tabs (All, Active, Completed)
- Add due date field
- Add "Clear completed" button

---

## Quick Troubleshooting

1. `npm: command not found`
- Node.js is not installed correctly; reinstall Node LTS.

2. `Cannot find module` or `vite: command not found`
- Run `npm install` in the project folder.

3. Blank page in browser
- Check terminal for compile errors.
- Open browser devtools console for runtime errors.

4. localStorage not updating
- Confirm the effect depends on `[goals]`.

---

## Grading Checklist (Homework)

- App runs with `npm run dev`
- CRUD operations all work
- Data persists after refresh
- UI is readable and organized
- Code is split into components
- Deployed URL works
