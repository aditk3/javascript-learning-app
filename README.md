# JavaScript Mastery — Complete Student Guide

**javascript-learning-app** is a self-contained, web-based JavaScript course.

## What you get (course scale)

- **32 topics** across three modules: Fundamentals, Language Features, and Advanced & Web APIs
- **Dozens of code examples and interactive exercises** (editable editor, Run/Reset, Solution + Explanation)
- **Quizzes** (multiple-choice knowledge checks)

## How to run

- **Fastest (no install):** Open `index.html` in a modern browser and start learning.
- **Recommended (for assets):** Run a local dev server so exercises that load files from `assets/` work (browsers block `fetch()` from `file://`).

```bash
npm install
npm run dev
```

Then open the URL printed by the server (e.g. `http://127.0.0.1:8080`).

## How the learning flow works

- **Sidebar navigation:** Topics are grouped into three modules and are meant to be taken in order.
- **Lesson page:**
  - **Explanation** (concepts and mental model)
  - **Code examples** (reference implementations)
  - **Exercises** (edit code in the browser, Run, Reset, Show Solution)
  - **Knowledge checks** (quizzes on selected topics)

## Running code (important)

- **Execution** happens online via the [Piston API](https://emkc.org) (Node.js). You need an internet connection for "Run Code."
- Code is run as **JavaScript** (language: `javascript`, version: `18.15.0`). There is no wrapper; your script runs as provided.
- **Reset** restores the original starter code for that exercise.
- **DOM / Fetch / Axios:** Some topics (DOM, Fetch, Axios) are explained in the lesson but run in Node.js here, so DOM and real HTTP may not be available. Exercises use simulations or plain JS where needed. For full DOM/fetch experience, try the same code in the browser console or an HTML page.

## Course map (what the course teaches)

### Module 1 — Fundamentals

- **Introduction to JavaScript** — What is JS, where it runs, `console.log`
- **Data Types** — Primitives, reference types, `typeof`, coercion
- **Variables & Scope** — `var`, `let`, `const`, block/function scope, TDZ
- **Control Flow** — Conditionals, loops, `break`/`continue`, `switch`, ternary
- **Operators & Expressions** — Arithmetic, comparison, logical, `??`, `?.`, precedence
- **Arrays** — Creation, methods, manipulation (`push`, `map`, `filter`, etc.)
- **Objects** — Creation, properties, methods, iteration
- **Strings** — Methods: `slice`, `split`, `includes`, `trim`, and more
- **Numbers & Math** — `Number()`, `parseInt`/`parseFloat`, `NaN`, `Math`, floating-point
- **Functions** — Declarations, expressions, parameters, return
- **Template Literals** — String interpolation, multi-line strings
- **Strict Mode** — `"use strict"` and its effects

### Module 2 — Language Features

- **The `this` Keyword** — Context and binding rules
- **Classes (ES6)** — Class syntax, constructors, methods
- **Hoisting** — Variable and function hoisting
- **Error Handling** — `try`/`catch`/`finally`, throwing errors
- **Spread and Rest Operators** — `...` for gathering and spreading
- **Arrow Functions** — Syntax and lexical `this`
- **Destructuring** — Unpacking values from arrays and objects
- **Modules** — `import`/`export`, default vs named, CommonJS
- **Data Structures (Map & Set)** — Map and Set with use cases
- **Dates** — Date basics, `toISOString`, parsing pitfalls

### Module 3 — Advanced & Web APIs

- **DOM Manipulation** — Selecting, creating, modifying elements (browser context)
- **Events and Listeners** — Handling user interactions and browser events
- **Event Bubbling and Capturing** — How events travel through nested elements
- **The Event Loop** — How JavaScript schedules async work on one thread
- **HTTP Basics** — Requests, responses, methods, status codes
- **JSON** — `JSON.parse`, `JSON.stringify`, working with JSON
- **Promises** — Creation, chaining, error handling
- **Fetch API** — The modern way to make HTTP requests
- **Async/Await** — Writing asynchronous code that reads like synchronous code
- **Axios** — A popular HTTP client library

## Student workflow (recommended)

- **Read first, then type:** Skim the explanation, then try the exercise from memory.
- **Predict output** before running: Use "Run Code" as feedback, not the first step.
- **Use solutions as a post-check:** Compare your approach to the solution and read the explanation.
- **Move in order:** Fundamentals → Language Features → Advanced & Web APIs (as in [content.js](content.js)).



### Where the course content lives

All curriculum is in [content.js](content.js) under `JAVASCRIPT_CONTENT`. The app ([app.js](app.js)) builds sidebar navigation from it. Each topic is an object with:

- **`title`** / **`subtitle`** — Shown at the top of the lesson
- **`content`** — HTML string (explanations, lists, code snippets)
- **`examples`** — Array of `{ code, caption }`
- **`exercises`** — Array of `{ question, starter, runnableStarter?, solution, explanation, stdin?, stdinAsset? }`
- **`quizzes`** — Optional array of `{ question, options, answer, explanation }`
