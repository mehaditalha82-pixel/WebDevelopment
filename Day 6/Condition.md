# JavaScript Conditionals — Comparison Operators, If-Else, Ternary & Logical Operators

A reference covering comparison operators, conditional branching, `==` vs `===`, logical operators, nested/multi-level conditions, the ternary operator, and the logical NOT operator.

---

## Table of Contents

1. [Compare Variables and Comparison Operators](#compare-variables-and-comparison-operators)
2. [Introduction to Conditionals](#introduction-to-conditionals)
3. [Difference Between `==` and `===`](#difference-between--and-)
4. [Conditional Branching — If-Else Condition](#conditional-branching--if-else-condition)
5. [Multiple Condition — Logical Operators (`&&` and `||`)](#multiple-condition--logical-operators--and-)
6. [Multi-level If-Else Condition](#multi-level-if-else-condition)
7. [Nested If-Else Condition](#nested-if-else-condition)
8. [If-Else Shorthand — Ternary Operator](#if-else-shorthand--ternary-operator)
9. [Logical NOT Operator](#logical-not-operator)

---

## Compare Variables and Comparison Operators

Comparison operators compare two values and return a **boolean** (`true` or `false`).

| Operator | Name | Example | Result |
|---|---|---|---|
| `==` | Loose equality (compares value, coerces type) | `5 == "5"` | `true` |
| `===` | Strict equality (compares value AND type) | `5 === "5"` | `false` |
| `!=` | Loose inequality | `5 != "5"` | `false` |
| `!==` | Strict inequality | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `10 < 5` | `false` |
| `>=` | Greater than or equal to | `10 >= 10` | `true` |
| `<=` | Less than or equal to | `9 <= 10` | `true` |

```js
let a = 10;
let b = 20;

console.log(a > b);  // false
console.log(a < b);  // true
console.log(a === 10); // true
console.log(a !== b);  // true
```

Comparing variables directly against each other:
```js
let age1 = 25;
let age2 = 30;

console.log(age1 < age2);        // true
console.log(age1 === age2);      // false
console.log(Math.max(age1, age2)); // 30
```

---

## Introduction to Conditionals

**Conditionals** let a program make decisions and execute different code depending on whether a condition is `true` or `false`. Without conditionals, code would run the exact same way every single time — conditionals give programs "branches" of logic.

The most common conditional structures in JavaScript are:
- `if`, `else if`, `else`
- `switch`
- Ternary operator (`condition ? a : b`)

```js
let temperature = 35;

if (temperature > 30) {
  console.log("It's hot outside!");
}
```

---

## Difference Between `==` and `===`

| | `==` (Loose Equality) | `===` (Strict Equality) |
|---|---|---|
| **Compares** | Value only (performs type coercion first) | Value **and** type |
| **Type conversion** | Yes — converts operands to the same type before comparing | No — no conversion, types must already match |
| **Recommended?** | Avoid in modern JS — can cause unexpected bugs | **Yes** — always prefer this for predictable behavior |

```js
console.log(5 == "5");   // true  → "5" is coerced to number 5, then compared
console.log(5 === "5");  // false → different types (number vs string), no coercion

console.log(0 == false);  // true  → false is coerced to 0
console.log(0 === false); // false → different types (number vs boolean)

console.log(null == undefined);  // true  → special case, loosely equal
console.log(null === undefined); // false → different types

console.log(NaN == NaN);  // false → NaN is never equal to anything, even itself
console.log(NaN === NaN); // false → same reason
```

**Best practice:** Always use `===` and `!==` in your code. Relying on `==` can lead to subtle, hard-to-debug type coercion bugs.

---

## Conditional Branching — If-Else Condition

The `if...else` statement executes one block of code if a condition is true, and another block if it's false.

### Basic `if`
```js
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}
```

### `if...else`
```js
let age = 15;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

### `if...else if...else`
```js
let marks = 75;

if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
// Output: Grade B
```

---

## Multiple Condition — Logical Operators (`&&` and `||`)

Logical operators let you combine multiple conditions into a single expression.

| Operator | Name | Behavior |
|---|---|---|
| `&&` | Logical AND | `true` only if **both** conditions are true |
| `\|\|` | Logical OR | `true` if **at least one** condition is true |
| `!` | Logical NOT | Reverses (inverts) a boolean value |

### `&&` (AND) — all conditions must be true
```js
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Entry allowed.");
} else {
  console.log("Entry denied.");
}
// Output: Entry allowed.
```

### `||` (OR) — at least one condition must be true
```js
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("No work today!");
} else {
  console.log("It's a working day.");
}
// Output: No work today!
```

### Combining Both
```js
let age = 16;
let hasParentPermission = true;

if ((age >= 18) || (age >= 13 && hasParentPermission)) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}
// Output: Access granted.
```

### Short-Circuit Evaluation
- `&&` stops at the first `false` value (no need to check further).
- `||` stops at the first `true` value.
```js
console.log(false && sayHello()); // sayHello() never runs
console.log(true || sayHello());  // sayHello() never runs
```

---

## Multi-level If-Else Condition

A **multi-level if-else** (also called an `if...else if` ladder) checks several conditions in sequence, executing the first one that matches.

```js
let score = 68;

if (score >= 90) {
  console.log("Grade: A+");
} else if (score >= 80) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else if (score >= 50) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// Output: Grade: C
```

**Key idea:** Conditions are checked **top to bottom**, and execution stops as soon as one condition evaluates to `true`. Order matters — always check the most specific/highest condition first.

---

## Nested If-Else Condition

A **nested if-else** is an `if...else` statement placed *inside* another `if...else` statement — useful when a decision depends on more than one independent condition.

```js
let age = 20;
let hasTicket = true;

if (age >= 18) {
  if (hasTicket) {
    console.log("Welcome, enjoy the movie!");
  } else {
    console.log("Please buy a ticket first.");
  }
} else {
  console.log("You must be 18+ to enter.");
}
// Output: Welcome, enjoy the movie!
```

### Real-World Example: Login System
```js
let username = "admin";
let password = "12345";

if (username === "admin") {
  if (password === "12345") {
    console.log("Login successful!");
  } else {
    console.log("Incorrect password.");
  }
} else {
  console.log("Username not found.");
}
```

**Note:** Deeply nested conditions can become hard to read. Where possible, combine conditions with `&&`/`||` or use early `return` statements to keep code flatter and more readable.

---

## If-Else Shorthand — Ternary Operator

The **ternary operator** (`? :`) is a shorthand way to write a simple `if...else` in a single line. It's the only JavaScript operator that takes **three** operands.

### Syntax
```js
condition ? expressionIfTrue : expressionIfFalse;
```

### Basic Example
```js
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // "Adult"
```

Equivalent long-form:
```js
let result;
if (age >= 18) {
  result = "Adult";
} else {
  result = "Minor";
}
```

### More Examples
```js
let num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd"); // "Odd"

let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back!" : "Please log in.");
```

### Chained (Nested) Ternary — use sparingly!
```js
let marks = 75;
let grade = marks >= 90 ? "A+" 
          : marks >= 80 ? "A" 
          : marks >= 70 ? "B" 
          : "C";
console.log(grade); // "B"
```
While chained ternaries work, they hurt readability if overused — prefer `if...else if` for more than 2–3 branches.

---

## Logical NOT Operator

The **logical NOT (`!`)** operator reverses/inverts a boolean value — `true` becomes `false`, and `false` becomes `true`.

```js
console.log(!true);  // false
console.log(!false); // true

let isRaining = false;
if (!isRaining) {
  console.log("Let's go outside!");
}
// Output: Let's go outside!
```

### Using `!` with Non-Boolean Values (Truthy/Falsy)
`!` first converts the value to a boolean, then inverts it.
```js
console.log(!0);          // true  (0 is falsy → inverted to true)
console.log(!"");         // true  (empty string is falsy)
console.log(!"hello");    // false (non-empty string is truthy → inverted to false)
console.log(!null);       // true
console.log(!undefined);  // true
console.log(![]);         // false (empty array is truthy!)
```

### Double NOT (`!!`) — Quick Boolean Conversion
Using `!` twice converts any value into its actual boolean equivalent (a common shorthand for `Boolean(value)`).
```js
console.log(!!"hello"); // true
console.log(!!0);       // false
console.log(!!"");      // false
console.log(!!null);    // false
```

### Practical Example
```js
let hasPermission = false;

if (!hasPermission) {
  console.log("Access denied.");
} else {
  console.log("Access granted.");
}
// Output: Access denied.
```