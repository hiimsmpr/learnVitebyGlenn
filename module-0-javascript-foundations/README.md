# Module 0 (2 Hours): JavaScript Foundations Reference Guide

Audience: Complete beginner (assume no coding background)

Goal: Learn the JavaScript concepts used across Modules 1 to 4 before diving into React.

This is a plain JavaScript module (no React). It is your long-term reference guide.

---

## Why This Module Exists

Every React concept depends on JavaScript first.

If you do not understand JavaScript basics, React code feels confusing.
This module gives you the exact JavaScript tools used in the other modules.

---

<a id="m0-run-commands"></a>
## Run This Module

From this folder (`module-0-javascript-foundations`):

```bash
npm install
npm run run:01
npm run run:02
npm run run:03
npm run run:04
npm run run:05
```

Or run everything:

```bash
npm run run:all
```

What these commands do:

- `npm install`: prepares project scripts.
- `npm run run:01` ... `run:05`: runs each JavaScript example file with Node.js.
- `npm run run:all`: runs all examples in order.

---

## Self-Study Mode (No Assumptions)

### Step 1: Install Tools

1. Install Node.js LTS from https://nodejs.org
2. Install VS Code from https://code.visualstudio.com
3. Restart your computer

Windows PC notes:

1. During Node.js install, keep the default options so Node and npm are added to PATH.
2. After restart, open PowerShell and run:

```bash
node -v
npm -v
```

3. If versions print, setup is correct.

### Step 2: Open Folder and Terminal

1. Open VS Code
2. File > Open Folder
3. Select `module-0-javascript-foundations`
4. Terminal > New Terminal

Windows PC notes:

1. PowerShell is recommended for this course.
2. If a command fails in one terminal, try running it in PowerShell.

### Step 3: Verify Setup

```bash
node -v
npm -v
```

### Step 4: Run Example Files

```bash
npm install
npm run run:all
```

---

## JavaScript Concepts Used In Modules 1-4

This section is the official reference list going forward.

Quick index (use these titles when another module says "see Module 0"):

1. Variables (`const`, `let`)
2. Functions (declaration and arrow function)
3. Arrays
4. Objects
5. Destructuring
6. Template Literals
7. Conditionals and truthy checks
8. Callbacks
9. Event object basics
10. Import/Export modules
11. Spread syntax (`...`)
12. Async JavaScript (`async`, `await`, `try/catch`)
13. JSON (`JSON.stringify`, `JSON.parse`)
14. Browser storage (`localStorage`)
15. IDs with `Date.now()`

<a id="m0-variables"></a>
### 1. Variables (`const`, `let`)

- `const` is for values you do not reassign.
- `let` is for values you will reassign.

```js
const appName = 'Study App'
let count = 0
count = count + 1
```

<a id="m0-functions"></a>
### 2. Functions (declaration and arrow function)

- Functions are reusable blocks of logic.
- Arrow functions are a shorter function syntax.

```js
function add(a, b) {
  return a + b
}

const addArrow = (a, b) => a + b
```

<a id="m0-arrays"></a>
### 3. Arrays

- Arrays store ordered lists.
- Common methods used in your modules:
  - `.map()` transform each item
  - `.filter()` keep matching items
  - `.find()` return first match

```js
const nums = [1, 2, 3]
const doubled = nums.map((n) => n * 2)
const evens = nums.filter((n) => n % 2 === 0)
const two = nums.find((n) => n === 2)
```

<a id="m0-objects"></a>
### 4. Objects

- Objects store named values using keys.

```js
const user = { id: 1, name: 'Trey' }
console.log(user.name)
```

<a id="m0-destructuring"></a>
### 5. Destructuring

- Pull values out of arrays/objects into variables.

```js
const user = { id: 1, name: 'Trey' }
const { id, name } = user

const list = ['A', 'B']
const [first] = list
```

<a id="m0-template-literals"></a>
### 6. Template Literals

- Build strings with variables using backticks.

```js
const name = 'Trey'
const greeting = `Hello, ${name}`
```

<a id="m0-conditionals"></a>
### 7. Conditionals and truthy checks

- Used for validation like "empty input?"

```js
const text = '  hi  '
if (!text.trim()) {
  console.log('Empty')
}
```

<a id="m0-callbacks"></a>
### 8. Callbacks

- Pass a function into another function.
- Used heavily in React event handlers and props.

```js
function runTask(taskName, callback) {
  callback(taskName)
}

runTask('Save', (name) => console.log(name))
```

<a id="m0-event-object"></a>
### 9. Event object basics

- Browser events carry data in `event`.
- Inputs use `event.target.value`.

```js
function handleChange(event) {
  console.log(event.target.value)
}
```

<a id="m0-import-export"></a>
### 10. Import/Export modules

- `export` makes code available to other files.
- `import` uses exported code.

```js
// math.js
export const add = (a, b) => a + b

// app.js
import { add } from './math.js'
```

<a id="m0-spread"></a>
### 11. Spread syntax (`...`)

- Copy arrays/objects without mutating original values.

```js
const list = [1, 2]
const nextList = [...list, 3]

const user = { name: 'Ari', active: false }
const nextUser = { ...user, active: true }
```

<a id="m0-async"></a>
### 12. Async JavaScript (`async`, `await`, `try/catch`)

- Used for API calls.

```js
async function loadData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data.length)
  } catch (error) {
    console.error(error)
  }
}
```

<a id="m0-json"></a>
### 13. JSON (`JSON.stringify`, `JSON.parse`)

- Convert between JavaScript values and text.
- Used with localStorage and APIs.

```js
const text = JSON.stringify({ done: true })
const value = JSON.parse(text)
```

<a id="m0-local-storage"></a>
### 14. Browser storage (`localStorage`)

- Save small text data in browser.

```js
localStorage.setItem('key', 'value')
const value = localStorage.getItem('key')
```

<a id="m0-date-now"></a>
### 15. IDs with `Date.now()`

- Quick way to generate number IDs in beginner apps.

```js
const id = Date.now()
```

---

## Practical Application Track

Use these files in order:

1. `examples/01-variables-functions.js`
2. `examples/02-arrays-objects.js`
3. `examples/03-callbacks-and-events.js`
4. `examples/04-async-fetch-json.js`
5. `examples/05-mini-task-manager.js`

Run each file and read the output.
Then open the file and change values to see behavior changes.

---

## 2-Hour Self-Study Plan

### 0:00-0:25 - Variables, Functions, Arrow Functions

- Run `npm run run:01`
- Change numbers and strings in the file
- Add one new function and one new arrow function

### 0:25-0:55 - Arrays, Objects, map/filter/find, destructuring

- Run `npm run run:02`
- Add one extra object into the array
- Write one new `.filter()` and one new `.map()`

### 0:55-1:20 - Callbacks and Event-like Data

- Run `npm run run:03`
- Change `runWithMessage` validation rule
- Create a second callback that prints uppercase text

### 1:20-1:45 - Async, fetch, JSON, try/catch

- Run `npm run run:04`
- Change output to print email list instead of names
- Temporarily break URL to trigger catch block

### 1:45-2:00 - Mini Practical Logic

- Run `npm run run:05`
- Add one extra task action (`clearCompleted`)
- Print summary after each action

---

## Homework (Night 0)

Build a file named `practice/homework-js-foundations.js`.

Requirements:

1. Create an array of at least 5 study topics (objects with `id`, `name`, `completed`).
2. Write functions to:
   - add a topic
   - toggle completed
   - delete a topic
3. Use `.map()` to print all topic names.
4. Use `.filter()` to print only incomplete topics.
5. Use `Date.now()` for IDs when adding topics.
6. Use `JSON.stringify` and `JSON.parse` at least once.
7. Use at least one arrow function and one regular function.

Stretch goals:

- Save/load the topic array from localStorage (if running in browser)
- Add async fetch from JSONPlaceholder and print 3 user names

---

## Going Forward Rule (Important)

When any later module introduces a JavaScript concept, add that concept to this Module 0 reference list immediately.

This module is the single source of truth for JavaScript prerequisites.
