# 🚀 JavaScript Placement Revision

> A structured **JavaScript fundamentals → interview preparation** repository containing coding exercises, concepts, and practice programs designed for **SDE / Full-Stack / MERN placement interviews and coding assessments**.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=ffffff)
![VS Code](https://img.shields.io/badge/VS%20Code-Development-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=ffffff)
![GitHub](https://img.shields.io/badge/Practice-Placement%20Ready-6f42c1?style=for-the-badge&logo=github&logoColor=ffffff)

---

## 🎯 Objective

This repository is focused on revising JavaScript efficiently for:

- 💻 Coding assessments
- 🧠 Technical interviews
- 👨‍💻 SDE / SDE-1 placements
- 🌐 Full-stack and MERN interviews
- ⚡ JavaScript output-based questions
- 🧩 Basic problem-solving and logical thinking

The goal is **not just to memorize syntax**, but to understand how JavaScript behaves and apply it through small coding problems.

---

## 📚 Topics Covered

### 🟢 JavaScript Fundamentals

- Variables — `var`, `let`, `const`
- Data types
- Type conversion and coercion
- Arithmetic and logical operators
- Comparison operators
- Conditional statements
- Loops
- Functions
- Arrays
- Strings
- Objects

### 🟡 JavaScript Interview Concepts

- Scope
- Block scope vs function scope
- Hoisting
- `var` vs `let` vs `const`
- Function declarations and expressions
- Arrow functions
- `this`
- Closures
- Higher-order functions
- ES6+ features

### 🔵 Practical JavaScript

- Array methods
- `map()`
- `filter()`
- `reduce()`
- Destructuring
- Spread / Rest operators
- Promises
- `async/await`
- Event loop
- DOM basics
- Browser APIs

---

## 🧩 Practice Roadmap

The exercises are intended to be solved progressively:

```text
Variables & Data Types
        ↓
Operators
        ↓
Conditionals
        ↓
Loops
        ↓
Functions
        ↓
Arrays & Strings
        ↓
Objects
        ↓
Scope & Hoisting
        ↓
ES6+
        ↓
Async JavaScript
        ↓
Interview Problems
```

---

## ⏱️ 1-Hour Basic Revision Set

The initial practice set contains **10 small exercises** that can be completed in approximately one hour.

| # | Exercise | Main Concepts |
|---|---|---|
| 01 | 🔢 Number Classification | Variables, operators, conditions |
| 02 | 🧮 Simple Calculator | Functions, operators, `switch` |
| 03 | 📈 Largest of Three | Comparisons, conditions |
| 04 | 🎓 Grade Calculator | Conditions, validation |
| 05 | ➕ Array Sum / Even / Odd | Arrays, loops, `%` |
| 06 | 🔄 Reverse an Array | Arrays, loops, indexing |
| 07 | 🥈 Second Largest | Arrays, loops, comparisons |
| 08 | 🏗️ `var` Hoisting | Hoisting, `var`, `let` |
| 09 | 🔭 Scope Prediction | Scope, `let`, `var` |
| 10 | 🧠 Mixed Challenge | Functions, loops, scope, operators |

---

## 💻 Running JavaScript in VS Code

### 1. Check Node.js

Open the VS Code terminal:

```bash
node --version
```

If Node.js is installed, you should see a version such as:

```text
v22.x.x
```

### 2. Run a JavaScript file

```bash
node filename.js
```

Example:

```bash
node 01-number.js
```

---

## ⌨️ Taking Input from the Terminal

For coding-assessment style input, Node.js `readline` can be used.

### Single number

```js
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const n = Number(input);

    console.log("You entered:", n);

    rl.close();
});
```

### Array input

For input such as:

```text
10 20 30 40 50
```

use:

```js
const arr = input.split(" ").map(Number);
```

### Recommended assessment template

```js
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {

    // Your solution here

});
```

Common conversions:

```js
// Number
const n = Number(input[0]);

// String
const str = input[0];

// Array of numbers
const arr = input[0].split(" ").map(Number);

// Two numbers
const [a, b] = input[0].split(" ").map(Number);
```

---

## 🧠 Interview Revision Checklist

Before a JavaScript interview, make sure you can explain these without referring to notes:

- [ ] `var` vs `let` vs `const`
- [ ] Primitive vs reference data types
- [ ] `==` vs `===`
- [ ] Type coercion
- [ ] Scope
- [ ] Hoisting
- [ ] Functions
- [ ] Arrow functions
- [ ] Closures
- [ ] `this`
- [ ] Arrays and objects
- [ ] `map()` / `filter()` / `reduce()`
- [ ] Spread and rest operators
- [ ] Destructuring
- [ ] Promises
- [ ] `async/await`
- [ ] Event loop
- [ ] DOM and events
- [ ] Debouncing and throttling

---

## 🏆 Practice Strategy

### For coding assessments

Focus on:

```text
Arrays
   ↓
Strings
   ↓
Loops
   ↓
Functions
   ↓
Objects
   ↓
Hashing / Maps
   ↓
Basic problem solving
```

### For technical interviews

Focus on:

```text
JavaScript Fundamentals
        +
Scope & Hoisting
        +
Closures
        +
this
        +
Promises
        +
Async/Await
        +
Event Loop
        +
ES6+
```

### ⭐ Golden Rule

> **Don't just run the code. Predict the output first.**

Especially for questions involving:

```js
var
let
const
closures
this
promises
setTimeout
async/await
```

First predict → explain → execute → verify.

---

## 📂 Suggested Repository Structure

```text
javascript-placement-revision/
│
├── README.md
│
├── 01-number-classification.js
├── 02-calculator.js
├── 03-largest-number.js
├── 04-grade-calculator.js
├── 05-array-basics.js
├── 06-reverse-array.js
├── 07-second-largest.js
├── 08-hoisting.js
├── 09-scope.js
├── 10-mixed-challenge.js
│
├── arrays/
├── functions/
├── objects/
├── scope-hoisting/
├── async-js/
└── interview-questions/
```

---

## 📈 Progress Tracker

| Area | Status |
|---|:---:|
| Variables & Data Types | ⬜ |
| Operators | ⬜ |
| Conditionals | ⬜ |
| Loops | ⬜ |
| Functions | ⬜ |
| Arrays | ⬜ |
| Strings | ⬜ |
| Objects | ⬜ |
| Scope | ⬜ |
| Hoisting | ⬜ |
| ES6+ | ⬜ |
| Closures | ⬜ |
| Promises | ⬜ |
| Async/Await | ⬜ |
| Event Loop | ⬜ |
| DOM | ⬜ |
| Interview Problems | ⬜ |

Update the checkboxes as you complete each section.

---

## 🔥 Placement Goal

The final objective is to progress from:

**Syntax → Logic → Problem Solving → JavaScript Internals → Interview Readiness**

```text
📖 Learn
   ↓
✍️ Code
   ↓
🧪 Test
   ↓
🐛 Debug
   ↓
🧠 Explain
   ↓
🎯 Interview Ready
```

---

## 🛠️ Tech Stack

- ⚡ JavaScript (ES6+)
- 🟢 Node.js
- 💻 VS Code
- 🐙 Git & GitHub

---

## 📌 Note

This repository is primarily intended for **practice and revision**. Solutions should be attempted independently before checking references or running the code.

> 🚀 **Consistency beats cramming. Solve a few problems every day and revisit your mistakes.**

---

### ⭐ If this repository helps you prepare, consider giving it a star!
