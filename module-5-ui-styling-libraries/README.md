# Module 5 (2 Hours): Add a UI Styling Library (Material UI or Ant Design)

Audience: Beginner (new to JavaScript and React)

Goal: Learn how to install and use a component styling library in a React app so you can build polished interfaces faster.

Starter code is already included in this folder, so you can run it immediately.

JavaScript note: if syntax feels unfamiliar, review Module 0 first (`module-0-javascript-foundations`).

---

## Run The Starter Code

From this folder (`module-5-ui-styling-libraries`):

```bash
npm install
npm run dev
```

Open the local URL shown in terminal.

---

## Self-Study Mode (No Assumptions)

### Step 1: Install tools once

1. Install Node.js LTS from https://nodejs.org
2. Install VS Code from https://code.visualstudio.com
3. Restart computer

Windows PC notes:

1. Use default Node.js options so Node/npm are added to PATH.
2. Open PowerShell and run:

```bash
node -v
npm -v
```

3. Continue after both commands print version numbers.

### Step 2: Open folder

1. Open VS Code
2. File > Open Folder
3. Select `module-5-ui-styling-libraries`
4. Terminal > New Terminal

Windows PC notes:

1. Use PowerShell terminal in VS Code.
2. If needed, switch terminal profile from the dropdown.

### Step 3: Verify setup

```bash
node -v
npm -v
```

### Step 4: Run app

```bash
npm install
npm run dev
```

---

## Why Use a UI Library?

Without a library, you style many UI pieces manually.
With a library, you get ready-made components (buttons, cards, inputs, modals, tables).

Benefits:

1. Faster development
2. Consistent design
3. Built-in accessibility defaults
4. Large ecosystem and docs

Tradeoffs:

1. Larger bundle size than plain CSS
2. You must learn each library's component API
3. Custom design systems may require theme overrides

---

## Material UI vs Ant Design (Quick Comparison)

- Material UI (MUI): strong theming system, Google Material style defaults, large community.
- Ant Design (AntD): enterprise-style components, many advanced UI components included.

Both are good. Choose the one that matches your design goals and team preference.

---

## Install Either Library In Any Vite React Project

### Option A: Material UI

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

Then import and use a component:

```jsx
import Button from '@mui/material/Button'

export default function Example() {
  return <Button variant="contained">Save</Button>
}
```

See Module 0: [Import/Export modules](../module-0-javascript-foundations/README.md#m0-import-export) and [Functions](../module-0-javascript-foundations/README.md#m0-functions).

### Option B: Ant Design

```bash
npm install antd
```

Then import reset styles once (usually in `main.jsx`):

```jsx
import 'antd/dist/reset.css'
```

Use a component:

```jsx
import { Button } from 'antd'

export default function Example() {
  return <Button type="primary">Save</Button>
}
```

See Module 0: [Import/Export modules](../module-0-javascript-foundations/README.md#m0-import-export) and [Functions](../module-0-javascript-foundations/README.md#m0-functions).

---

## 2-Hour Self-Study Plan

Module 0 references for this plan (`module-0-javascript-foundations`):

- 0:00-0:20 -> [Import/Export modules](../module-0-javascript-foundations/README.md#m0-import-export), [Functions](../module-0-javascript-foundations/README.md#m0-functions)
- 0:20-0:50 -> [Objects](../module-0-javascript-foundations/README.md#m0-objects), [Variables](../module-0-javascript-foundations/README.md#m0-variables)
- 0:50-1:20 -> [Callbacks](../module-0-javascript-foundations/README.md#m0-callbacks), [Event object basics](../module-0-javascript-foundations/README.md#m0-event-object)
- 1:20-1:45 -> [Conditionals](../module-0-javascript-foundations/README.md#m0-conditionals), [Spread syntax](../module-0-javascript-foundations/README.md#m0-spread)
- 1:45-2:00 -> [Run This Module](../module-0-javascript-foundations/README.md#m0-run-commands)

### 0:00-0:20 - Install and First Component

1. Install one library (MUI or AntD)
2. Add one Button component
3. Verify it renders

### 0:20-0:50 - Build a Small Form Card

Create a UI with:

1. Card
2. Input
3. Button
4. Alert/message

Goal: use only library components for layout and controls.

### 0:50-1:20 - Add Interactivity

Add local state:

1. Track input value
2. Show preview text
3. Disable save button when input is empty

### 1:20-1:45 - Basic Theming

- MUI: use `createTheme` and `ThemeProvider`
- AntD: use `ConfigProvider` theme tokens

Change at least:

1. Primary color
2. Border radius
3. Font size on one component

### 1:45-2:00 - Compare and Decide

Ask yourself:

1. Which API felt easier?
2. Which default style fits your project?
3. Which docs felt clearer for beginners?

---

## Practical Application

This starter app demonstrates both libraries side-by-side.

Files to explore:

1. `src/App.jsx` (library switch logic)
2. `src/components/MuiShowcase.jsx`
3. `src/components/AntdShowcase.jsx`
4. `src/styles.css`

---

## Homework (Night 5)

Build a small app called **Styled Task Planner**.

Requirements:

1. Choose one library (MUI or AntD).
2. Build a page with:
   - Header
   - Task input
   - Add button
   - Task list
3. Add at least 5 library components.
4. Add one state interaction (input preview, add/delete, or toggle complete).
5. Apply a custom theme color.
6. Add a short note in README: why you chose that library.

Stretch goals:

- Add modal dialog for task details
- Add toast/notification after save
- Add responsive layout with grid components

---

## Common Beginner Mistakes

1. Forgetting to install required peer packages (MUI needs emotion packages)
2. Forgetting to import AntD reset styles
3. Mixing too much custom CSS too early
4. Not reading component props docs
5. Using two UI libraries in one production app without a reason

---

## Going Forward Rule

If a new JavaScript concept appears while using UI libraries, add it to Module 0.
