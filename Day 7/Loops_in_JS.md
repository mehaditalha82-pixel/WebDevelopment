# JavaScript Loops — For, While, Break/Continue & Interview Questions

A reference covering the `for` loop, `while`/`do...while` loops, `break` and `continue`, key differences between loop types, and interview questions.

---

## Table of Contents

1. [For Loop](#1-for-loop)
2. [While Loop](#2-while-loop)
3. [Break and Continue](#3-break-and-continue)
4. [Difference Between Loops](#4-difference-between-loops)
5. [Interview Questions & Answers](#interview-questions--answers)

---

## 1. For Loop

The `for` loop repeats a block of code a specific number of times. It's ideal when you know in advance how many times you want to iterate.

### Syntax
```js
for (initialization; condition; increment/decrement) {
  // code to run each iteration
}
```

### Basic Example
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1 2 3 4 5
```

**How it works:**
1. `let i = 1` — runs once, before the loop starts.
2. `i <= 5` — checked before every iteration; loop continues only if true.
3. Code block runs.
4. `i++` — runs after each iteration.
5. Repeat steps 2–4 until the condition becomes false.

### Looping Backwards
```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// Output: 10 9 8 7 6 5 4 3 2 1
```

### Looping Through an Array
```js
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output: Apple Banana Mango
```

### `for...of` (values) and `for...in` (keys/indexes) — Modern Variants
```js
// for...of - iterates over VALUES (arrays, strings, etc.)
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in - iterates over KEYS/INDEXES (objects, arrays)
for (let index in fruits) {
  console.log(index, fruits[index]);
}
```

### Nested For Loop (e.g., Multiplication Table)
```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
```

---

## 2. While Loop

The `while` loop repeats a block of code **as long as a condition remains true**. It's ideal when you don't know in advance exactly how many iterations are needed.

### Syntax
```js
while (condition) {
  // code to run each iteration
}
```

### Basic Example
```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++; // must update the condition variable, or the loop never ends
}
// Output: 1 2 3 4 5
```

⚠️ **Important:** You must update the loop variable inside the block, or you'll create an **infinite loop**.
```js
let i = 1;
while (i <= 5) {
  console.log(i);
  // forgot i++ here → infinite loop!
}
```

### `do...while` Loop
Similar to `while`, but the code block runs **at least once** before the condition is checked (condition is evaluated *after* the block).
```js
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
// Output: 1 2 3 4 5
```

**Key difference:** with `do...while`, the block always executes at least once — even if the condition is false from the start.
```js
let i = 10;

// Regular while - never runs (condition false immediately)
while (i <= 5) {
  console.log(i);
}

// do...while - runs once regardless
do {
  console.log(i); // 10 prints once
} while (i <= 5);
```

---

## 3. Break and Continue

Both `break` and `continue` alter the normal flow of a loop, but in different ways.

### `break` — Exits the Loop Entirely
Stops the loop immediately, regardless of the original condition.
```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // stop the loop as soon as i reaches 5
  }
  console.log(i);
}
// Output: 1 2 3 4
```

**Practical example — search and stop:**
```js
let numbers = [4, 8, 15, 16, 23, 42];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 16) {
    console.log("Found 16 at index " + i);
    break; // no need to keep checking after found
  }
}
```

### `continue` — Skips the Current Iteration
Skips the rest of the current iteration and moves to the next one — the loop does **not** stop.
```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // skip even numbers
  }
  console.log(i);
}
// Output: 1 3 5 7 9
```

**Practical example — skip invalid entries:**
```js
let scores = [80, -1, 95, -1, 70];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === -1) {
    continue; // skip invalid score entries
  }
  console.log("Valid score:", scores[i]);
}
```

### `break` vs `continue` — Quick Comparison
| | `break` | `continue` |
|---|---|---|
| **Effect** | Exits the entire loop immediately | Skips only the current iteration |
| **Loop continues after?** | No — loop stops completely | Yes — moves to the next iteration |
| **Common use case** | Stop searching once a match is found | Skip unwanted/invalid values but keep looping |

---

## 4. Difference Between Loops

| | `for` | `while` | `do...while` |
|---|---|---|---|
| **Best used when** | Number of iterations is known in advance | Number of iterations is unknown, depends on a condition | Same as `while`, but you need the block to run **at least once** |
| **Structure** | Initialization, condition, and increment all in one line | Only a condition; init/increment handled manually | Condition checked **after** the block runs |
| **Condition check** | Before each iteration | Before each iteration | After each iteration |
| **Minimum executions** | 0 (if condition false initially) | 0 (if condition false initially) | **1** (always runs once, even if condition is false) |
| **Readability for counting** | Very clean for counters/ranges | Less compact for simple counting | Less compact for simple counting |

### Other Loop Variants Worth Knowing
| Loop | Use Case |
|---|---|
| `for...of` | Iterating over **values** of iterables (arrays, strings, Maps, Sets) |
| `for...in` | Iterating over **keys/property names** of an object (or indexes of an array) |
| `forEach()` | Array method — runs a callback for each element (cannot use `break`) |

```js
let arr = [10, 20, 30];

arr.forEach((value, index) => {
  console.log(index, value);
});
```
**Note:** `forEach()` cannot be stopped with `break` — if you need early exit, use a regular `for` loop instead.

---

## Interview Questions & Answers

1. **What's the main difference between a `for` loop and a `while` loop?**
   A `for` loop is best when you know the exact number of iterations in advance, combining initialization, condition, and increment/decrement in a single line. A `while` loop is best when the number of iterations depends on a condition that isn't known ahead of time, and requires manually updating the loop variable inside the block.

2. **What is the key difference between `while` and `do...while`?**
   In a `while` loop, the condition is checked **before** the block runs, so the block may never execute if the condition is false initially. In a `do...while` loop, the condition is checked **after** the block runs, so the block always executes at least once.

3. **What does the `break` statement do?**
   It immediately terminates the closest enclosing loop (or `switch` statement), and execution continues with the code after the loop.

4. **What does the `continue` statement do?**
   It skips the rest of the current loop iteration and jumps to the next iteration's condition check, without exiting the loop entirely.

5. **What happens if you forget to update the loop variable in a `while` loop?**
   You create an **infinite loop** — since the condition never changes, it stays true forever and the loop never terminates, potentially freezing or crashing the program.

6. **What's the difference between `for...of` and `for...in`?**
   `for...of` iterates over the **values** of an iterable (arrays, strings, Maps, Sets). `for...in` iterates over the **enumerable keys/property names** of an object (or the indexes of an array). `for...in` is generally not recommended for arrays since it iterates over indexes as strings and can include inherited properties.

7. **Can you use `break` inside a `forEach()` loop?**
   No. `break` and `continue` don't work inside `Array.prototype.forEach()` because it's a function callback, not a true loop structure. To exit early, use a regular `for` loop, `for...of`, or array methods like `some()`/`find()` which support early termination.

8. **How do you break out of a nested loop entirely (not just the inner loop)?**
   Using a **labeled statement**:
   ```js
   outerLoop: for (let i = 0; i < 3; i++) {
     for (let j = 0; j < 3; j++) {
       if (j === 1) break outerLoop; // breaks BOTH loops
       console.log(i, j);
     }
   }
   ```

9. **What is an infinite loop, and how can it be created intentionally (with a safe exit)?**
   An infinite loop runs forever because its condition never becomes false. It can be created intentionally using `while (true) { ... }` combined with a `break` statement inside based on some internal condition, giving manual control over when to exit.
   ```js
   let i = 0;
   while (true) {
     if (i >= 5) break;
     console.log(i);
     i++;
   }
   ```

10. **Which loop would you use to iterate exactly 10 times, and why?**
    A `for` loop — because it's the most concise and readable option when the number of iterations is fixed and known in advance:
    ```js
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
    ```

11. **What is loop "short-circuiting" in the context of `break`?**
    It refers to exiting a loop as soon as a certain condition is met (e.g., finding a target value), rather than needlessly continuing to check every remaining element — this improves performance for search-like operations.

12. **Is it possible for a `for` loop to run zero times? Give an example.**
    Yes — if the condition is false from the very first check, the loop body never executes:
    ```js
    for (let i = 5; i < 5; i++) {
      console.log(i); // never runs
    }
    ```