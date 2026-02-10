# JavaScript Mastery — Complete Student Guide

This is a self-contained, web-based JavaScript course. It mirrors the structure of the Java learning app: read concise explanations, study runnable examples, then complete interactive exercises (with solutions and explanations).

## What you get (course scale)

- **26 topics** across JavaScript Fundamentals and Advanced JavaScript & Web APIs
- **30+ code examples** (read-only, syntax highlighted)
- **35+ interactive exercises** (editable editor, Run/Reset, Solution + Explanation)
- **3 quizzes** (multiple-choice knowledge checks)

## How to run

- **Fastest (no install):** Open `index.html` in a modern browser and start learning.
- **Recommended (for assets):** Run a local dev server so exercises that load files from `assets/` work (browsers block `fetch()` from `file://`).

```bash
npm install
npm run dev
```

Then open the URL printed by the server (e.g. `http://127.0.0.1:8080`).

## How the learning flow works

- **Sidebar navigation:** Topics are grouped into two modules and are meant to be taken in order.
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

## Using input files (`assets/`) in exercises

Some exercises can use stdin or load data from files under `assets/` (e.g. `assets/users.json`, `assets/text-data.txt`, `assets/config.json`).

- **Why a server:** Browsers typically block `fetch()` from `file://` pages.
- **Fix:** Run `npm run dev` and open the served URL.
- In content, an exercise can specify `stdin` or `stdinAsset: 'assets/your-file.txt'` if the app supports it.

## Course map (what the course teaches)

Content is defined in `content.js` as `JAVASCRIPT_CONTENT`. The app builds navigation from it. Topic set:

### Module 1 — JavaScript Fundamentals

- **Introduction to JavaScript** — What is JS, where it runs, `console.log`
- **Variables (var, let, const)** — Declaration, reassignment, best practices
- **Data Types** — Primitives, reference types, `typeof`
- **Scope** — Global, function, block scope
- **Arrays** — Creation, methods, manipulation (`push`, `map`, `filter`, etc.)
- **Functions** — Declarations, expressions, parameters, return
- **Template Literals** — String interpolation, multi-line strings
- **Strict Mode** — `"use strict"`, effects
- **The `this` Keyword** — Context, methods
- **Classes (ES6)** — Class syntax, constructors, methods
- **Hoisting** — Variable and function hoisting
- **Error Handling** — `try`/`catch`/`finally`, throwing errors
- **Default Parameters** — Default values for function parameters
- **Spread & Rest Operators** — `...` in parameters and expressions
- **Arrow Functions** — Syntax, lexical `this`
- **Destructuring** — Array and object destructuring

### Module 2 — Advanced JavaScript & Web APIs

- **DOM Manipulation** — Selecting, creating, modifying elements (browser context)
- **Events and Listeners** — `addEventListener`, event object
- **Event Bubbling and Capturing** — Propagation order
- **Event Loop** — Call stack, callback queue, microtasks
- **JavaScript HTTP (XMLHttpRequest)** — Basic XHR usage
- **JSON** — `JSON.parse`, `JSON.stringify`, working with JSON
- **Promises** — Creation, chaining, error handling
- **Fetch API** — GET, POST, handling responses
- **Async/Await** — Syntax and usage
- **Axios** — Library usage, comparison with Fetch

## Student workflow (recommended)

- **Read first, then type:** Skim the explanation, then try the exercise from memory.
- **Predict output** before running: Use "Run Code" as feedback, not the first step.
- **Use solutions as a post-check:** Compare your approach to the solution and read the explanation.
- **Move in order:** Fundamentals first, then Advanced & Web APIs.

## Project structure (for maintainers / contributors)

```
javascript-learning-app/
├── index.html      # Main page (loads content + app logic)
├── styles.css      # Styling and layout (JavaScript branding)
├── content.js      # Curriculum: JAVASCRIPT_CONTENT (topics, examples, exercises, quizzes)
├── app.js          # Navigation, rendering, editor setup, code execution (Piston API)
├── assets/         # Sample files for I/O exercises (e.g. users.json, text-data.txt, config.json)
├── package.json    # Optional: dev server script
└── README.md       # This file
```

### Where the course content lives

All curriculum is in `content.js` under `JAVASCRIPT_CONTENT`. Each topic is an object with:

- **`title`** / **`subtitle`** — Shown at the top of the lesson
- **`content`** — HTML string (explanations, lists, code snippets)
- **`examples`** — Array of `{ code, caption }`
- **`exercises`** — Array of `{ question, starter, runnableStarter?, solution, explanation, stdin?, stdinAsset? }`
- **`quizzes`** — Optional array of `{ question, options, answer, explanation }`
