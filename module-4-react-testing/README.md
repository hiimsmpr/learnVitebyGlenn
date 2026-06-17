# Module 4 (2 Hours): Testing React Apps

Audience: Beginner (new to JavaScript and React)

Goal: Learn how to test React components so you can verify behavior with confidence.

Starter code is already included in this folder, so you can run it immediately.

---

## Run The Starter Code

From this folder (`module-4-react-testing`):

Why run `npm install` first:

- It installs dependencies from `package.json`.
- It creates `node_modules`, required for Vite, Vitest, and testing libraries.
- If skipped, test commands will fail due to missing packages.

```bash
npm install
npm run dev
```

Open the local URL printed in terminal.

---

## Self-Study Mode (No Assumptions)

### Step 1: Install Tools (One Time)

1. Install Node.js LTS from https://nodejs.org
2. Install VS Code from https://code.visualstudio.com
3. Restart your computer

### Step 2: Open This Folder

1. Open VS Code
2. File > Open Folder
3. Choose `module-4-react-testing`
4. Open terminal: Terminal > New Terminal

### Step 3: Verify Node and npm

```bash
node -v
npm -v
```

If versions print, continue.

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Run App and Tests

```bash
npm run dev
```

In a second terminal tab:

```bash
npm run test
```

### Step 6: Stop Running Processes

Press Control + C in each terminal where a process is running.

---

## Learning Outcomes

By the end, you should be able to:

1. Explain why tests help prevent regressions.
2. Distinguish unit tests vs integration tests (basic level).
3. Write tests with Vitest + React Testing Library.
4. Query elements by accessible roles and labels.
5. Simulate user actions (click, type).
6. Assert expected UI behavior.

---

## Test Stack Used

- Vitest (test runner)
- React Testing Library (render/query components)
- user-event (simulate real user interactions)
- jsdom (browser-like environment for tests)

In plain words:

- A test runner executes your test files and reports pass/fail.
- React Testing Library helps you test what the user sees and does.
- `user-event` simulates real user actions like typing and clicking.
- `jsdom` provides a fake browser environment for tests in Node.js.

---

## 2-Hour Self-Study Plan

### 0:00-0:20 - Testing Fundamentals

Understand:

- What a test is
- Why manual-only testing is risky
- Red/green cycle (fail first, then pass)

In plain words:

- A test is a small script that checks one expected behavior.
- Manual testing can miss bugs because humans forget steps.
- Red/green means: write a failing test first, then write code until it passes.

Key language:

- Arrange: prepare test data and render
- Act: interact with component
- Assert: verify outcome

Quick example:

- Arrange: render `<TaskCounter />`
- Act: click `Increase`
- Assert: expect count text to be `1`

### 0:20-0:50 - First Component Test

Use `TaskCounter` component.

What to do:

1. Render component in test
2. Find elements by role or text
3. Assert default UI values

### 0:50-1:20 - Interaction Tests

Practice with clicks:

1. Click increment button
2. Assert count updates
3. Click reset button
4. Assert count returns to zero

### 1:20-1:45 - Form Test Basics

Use `TaskForm` component.

What to do:

1. Type in input
2. Submit form
3. Assert callback receives expected value
4. Assert input clears

### 1:45-2:00 - Recap + Practical Workflow

Commands:

```bash
npm run test
npm run test:watch
npm run build
```

Self-check questions:

1. Why test user behavior instead of implementation details?
2. Why use `getByRole` when possible?
3. What should each test verify?

Helpful answers:

- Test behavior the user can observe, not internal implementation details.
- Use `getByRole` because it mirrors accessibility and real usage.
- One test should focus on one clear behavior.

---

## Homework (Night 4)

Build and test a **Todo Mini App**.

Requirements:

1. Add todo input and submit button.
2. Display todo list.
3. Allow delete.
4. Add at least 4 tests:
   - renders heading
   - adds new todo
   - clears input after submit
   - deletes todo

Stretch goals:

- Add toggle complete and test it
- Add filter (all/active/completed) and tests

---

## Quick Troubleshooting

1. `document is not defined`
- Ensure `environment: 'jsdom'` is set in test config.

2. `toBeInTheDocument is not a function`
- Ensure `@testing-library/jest-dom` is imported in setup file.

3. Tests cannot find element
- Prefer queries by role/label/text visible to users.

4. Test passes locally, fails later
- Avoid relying on test order; each test must be independent.

---

## Grading Checklist

- App runs with `npm run dev`
- All tests run with `npm run test`
- Tests cover rendering and interactions
- Component logic works in browser
- Student can explain each test in plain language

---

## Answer Key (Plain English)

Use this when you want to check what each test is actually proving.

### TaskCounter Tests

1. `shows initial count as 0`
- Proves the component starts in a known default state.
- Why it matters: users should always see predictable data on first load.

2. `increments count when Increase is clicked`
- Proves button click events trigger state updates correctly.
- Why it matters: confirms the UI reacts to user interaction.

3. `resets count when Reset is clicked`
- Proves reset logic works after state has changed.
- Why it matters: many real apps need a "start over" action.

### TaskForm Tests

1. `submits typed task and clears input`
- Proves the form sends correct data to parent callback.
- Proves input is cleared after successful submit.
- Why it matters: validates both business logic (data passed) and UX (input reset).

2. `does not submit empty input`
- Proves basic validation prevents empty submissions.
- Why it matters: avoids bad data entering app state.

### Quick Explanation Script

1. "This test checks first render defaults."
2. "This test checks behavior after a user action."
3. "This test checks validation or edge cases."

If you can explain those 3 types, you understand test purpose at a beginner level.

### Optional Challenge Answers

If you add delete/toggle features in homework, expected tests should prove:

1. Item appears after submit.
2. Item is removed after clicking delete.
3. Item visual state changes after toggle complete.
4. Filter shows only matching items.

---

## Module 4 Quiz (10 Questions)

Use this at the end of class. Mix multiple choice and short answer.

1. What is the main purpose of automated tests in a React app?
2. True or false: Vitest is the UI library used to render components.
3. Which library is used to render components and query the DOM in tests?
4. Why is `getByRole` usually preferred over selecting by CSS class?
5. In a test, what do Arrange, Act, and Assert mean?
6. What does this command do: `npm run test:watch`?
7. In `TaskForm`, what behavior should happen after a valid submit?
8. Why should each test be independent of other tests?
9. What is `jsdom` used for in this module?
10. If `toBeInTheDocument` fails with "is not a function", what setup is probably missing?

### Quiz Answer Key

1. To verify behavior automatically and catch regressions when code changes.
2. False. Vitest is the test runner; React Testing Library renders components.
3. React Testing Library (`@testing-library/react`).
4. Because it matches how real users and assistive tools find elements, making tests more reliable and accessible-focused.
5. Arrange = set up component/data, Act = perform interaction, Assert = check expected result.
6. It runs tests in watch mode and re-runs tests when files change.
7. Call the submit callback with cleaned input and clear the input field.
8. So tests are reliable regardless of execution order.
9. It provides a browser-like DOM environment for tests in Node.
10. The jest-dom matcher setup import is missing (for example in `src/test-setup.js`).

Scoring suggestion:

- 9-10 correct: ready to write tests independently.
- 7-8 correct: good base, review query methods and assertions.
- 6 or fewer: repeat the first two time blocks and re-run sample tests.
