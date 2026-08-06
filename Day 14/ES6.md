# JavaScript Deep Dive — Data Types, Scope, Closures, Callbacks & Array Methods

A reference covering primitive vs non-primitive types, `null` vs `undefined`, truthy/falsy values, `==` vs `===`, scope & hoisting, closures, callback functions, pass by value vs reference, increment operators, and the core array "power methods."

---

## Table of Contents

1. [Primitive and Non-Primitive Data Types](#primitive-and-non-primitive-data-types)
2. [Null vs Undefined](#null-vs-undefined)
3. [Truthy and Falsy](#truthy-and-falsy)
4. [`==` vs `===`](#-vs-)
5. [Scope and Hoisting](#scope-and-hoisting)
6. [Closure](#closure)
7. [Callback Function](#callback-function)
8. [Pass by Value vs Pass by Reference](#pass-by-value-vs-pass-by-reference)
9. [Pre and Post Increment](#pre-and-post-increment)
10. [Array Power Methods — map, forEach, filter, find, slice, reduce](#array-power-methods--map-foreach-filter-find-slice-reduce)

---

## Primitive and Non-Primitive Data Types

### Primitive Data Types
Primitives are the most basic data types — they are **immutable** and stored **by value** (a direct copy of the actual data).

| Type | Example |
|---|---|
| `number` | `25`, `3.14`, `-10` |
| `string` | `"hello"`, `'world'` |
| `boolean` | `true`, `false` |
| `undefined` | `let x;` |
| `null` | `let y = null;` |
| `bigint` | `123n` |
| `symbol` | `Symbol("id")` |

```js
let a = 10;
let b = a; // 'b' gets a COPY of the value
b = 20;
console.log(a); // 10 (unaffected — a and b are independent)
console.log(b); // 20
```

### Non-Primitive Data Types (Reference Types)
Everything else in JS is an **object** — including arrays, functions, and plain objects. These are **mutable** and stored **by reference** (a pointer to a location in memory).

| Type | Example |
|---|---|
| `object` | `{ name: "John" }` |
| `array` | `[1, 2, 3]` |
| `function` | `function() {}` |
| `Date`, `RegExp`, `Map`, `Set` | Built-in object types |

```js
let obj1 = { name: "John" };
let obj2 = obj1; // 'obj2' gets a REFERENCE to the same object
obj2.name = "Sara";
console.log(obj1.name); // "Sara" (affected! both point to the same object)
```

### Quick Comparison

| | **Primitive** | **Non-Primitive** |
|---|---|---|
| **Mutability** | Immutable | Mutable |
| **Stored as** | Value (a copy) | Reference (a memory address) |
| **Comparison** | Compares actual values | Compares memory reference, not content |
| **`typeof` result** | `"number"`, `"string"`, `"boolean"`, etc. | `"object"` (or `"function"`) |

```js
console.log({ a: 1 } === { a: 1 }); // false (different objects in memory, even though content matches)
console.log(5 === 5);               // true (values are compared directly)
```

---

## Null vs Undefined

| | `undefined` | `null` |
|---|---|---|
| **Meaning** | A variable has been declared but not yet assigned a value | Represents an intentional "empty" or "no value" |
| **Set by** | JavaScript automatically | The developer explicitly |
| **Type (`typeof`)** | `"undefined"` | `"object"` (a long-standing JS quirk/bug) |
| **Equality (`==`)** | `undefined == null` → `true` | `null == undefined` → `true` |
| **Equality (`===`)** | `undefined === null` → `false` | Different types, so strictly unequal |

```js
let a;
console.log(a);           // undefined (declared, never assigned)
console.log(typeof a);    // "undefined"

let b = null;
console.log(b);           // null (explicitly set to "nothing")
console.log(typeof b);    // "object" (famous JS quirk)

function greet(name) {
  console.log(name); // undefined if no argument is passed
}
greet(); // undefined
```

**When to use `null`:** Use it intentionally to indicate "this variable exists, but has no value right now" — e.g., resetting a value, or representing the absence of an object.
```js
let selectedUser = null; // no user selected yet
selectedUser = { name: "John" }; // later assigned
```

---

## Truthy and Falsy

Every value in JavaScript is either **truthy** or **falsy** when evaluated in a boolean context (like an `if` statement).

### Falsy Values (Only 8 — Memorize These!)
```js
false
0
-0
0n        // BigInt zero
""        // empty string
null
undefined
NaN
```

### Everything Else is Truthy
```js
console.log(Boolean("0"));      // true  (non-empty string, even "0"!)
console.log(Boolean([]));       // true  (empty array is truthy!)
console.log(Boolean({}));       // true  (empty object is truthy!)
console.log(Boolean(" "));      // true  (string with just a space)
console.log(Boolean(-1));       // true  (any non-zero number)
console.log(Boolean(Infinity)); // true
```

### Practical Usage
```js
let username = "";

if (username) {
  console.log("Welcome, " + username);
} else {
  console.log("Please enter a username."); // this runs — "" is falsy
}
```

**Common gotcha:**
```js
let count = 0;
if (count) {
  console.log("Has items");
} else {
  console.log("No items"); // runs — 0 is falsy, even though it's a valid number!
}
```

---

## `==` vs `===`

| | `==` (Loose Equality) | `===` (Strict Equality) |
|---|---|---|
| **Compares** | Value only, with type coercion | Value **and** type |
| **Recommended** | Avoid — unpredictable | **Always prefer this** |

```js
console.log(5 == "5");   // true  (string coerced to number)
console.log(5 === "5");  // false (different types)

console.log(0 == false); // true
console.log(0 === false); // false

console.log(null == undefined);  // true
console.log(null === undefined); // false
```

**Best practice:** Always use `===` and `!==` to avoid unexpected type coercion bugs.

---

## Scope and Hoisting

### Scope
**Scope** determines where a variable is accessible in your code.

| Scope Type | Description |
|---|---|
| **Global scope** | Declared outside any function/block — accessible anywhere |
| **Function scope** | Declared inside a function — accessible only within that function (`var`) |
| **Block scope** | Declared inside `{ }` — accessible only within that block (`let`/`const`) |

```js
let globalVar = "I'm global";

function myFunction() {
  let functionVar = "I'm function-scoped";
  if (true) {
    let blockVar = "I'm block-scoped";
    console.log(blockVar); // ✅ accessible here
  }
  console.log(blockVar); // ❌ ReferenceError - out of scope
}
```

### Hoisting
**Hoisting** is JavaScript's behavior of moving variable and function **declarations** to the top of their scope before code execution — but not their assignments.

```js
console.log(x); // undefined (not an error! declaration is hoisted)
var x = 5;

// The above is interpreted as:
// var x;
// console.log(x); // undefined
// x = 5;
```

**`let`/`const` are hoisted too, but land in the "Temporal Dead Zone" (TDZ)** — accessing them before declaration throws an error instead of returning `undefined`.
```js
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

**Function declarations are fully hoisted** (including their body), so they can be called before their definition appears in the code:
```js
sayHi(); // ✅ works fine

function sayHi() {
  console.log("Hi!");
}
```

**Function expressions are NOT hoisted** the same way:
```js
sayBye(); // ❌ TypeError: sayBye is not a function
var sayBye = function() {
  console.log("Bye!");
};
```

---

## Closure

A **closure** is formed when a function "remembers" and continues to have access to variables from its outer (enclosing) scope, even after that outer function has finished executing.

```js
function outer() {
  let count = 0; // this variable is "enclosed"

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer(); // outer() has already finished running
counter(); // 1
counter(); // 2
counter(); // 3 — 'count' is remembered between calls!
```

### Why Closures Are Useful

**1. Data Privacy (Private Variables):**
```js
function createBankAccount(initialBalance) {
  let balance = initialBalance; // not accessible from outside directly

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
console.log(account.deposit(50));  // 150
console.log(account.withdraw(30)); // 120
console.log(account.balance);      // undefined — cannot access directly!
```

**2. Function Factories:**
```js
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**3. Classic Loop + `setTimeout` Fix:**
```js
// Problem with var (no closure per iteration — shared variable)
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000); // prints 4, 4, 4
}

// Fixed with let (each iteration creates a new closure/scope)
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000); // prints 1, 2, 3
}
```

---

## Callback Function

A **callback function** is a function passed as an argument to another function, to be executed later — either immediately, after some condition, or asynchronously.

### Basic Callback Example
```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("John", sayBye);
// "Hello, John"
// "Goodbye!"
```

### Callbacks with Array Methods
```js
let numbers = [1, 2, 3];
numbers.forEach(function(num) { // this function IS the callback
  console.log(num * 2);
});
```

### Asynchronous Callbacks (Most Common Real-World Use)
```js
console.log("Start");

setTimeout(function() { // callback runs AFTER 2 seconds
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output order:
// "Start"
// "End"
// "This runs after 2 seconds" (after the delay)
```

### Callback Hell (A Known Downside)
Deeply nested callbacks become hard to read/maintain — this is one reason Promises and `async`/`await` were introduced.
```js
getUser(id, function(user) {
  getOrders(user, function(orders) {
    getOrderDetails(orders[0], function(details) {
      console.log(details); // deeply nested — "callback hell"
    });
  });
});
```

---

## Pass by Value vs Pass by Reference

### Pass by Value (Primitives)
When a primitive value is passed to a function, a **copy** is made — changes inside the function do not affect the original variable.
```js
function changeValue(num) {
  num = num + 10;
  console.log("Inside function:", num);
}

let originalNum = 5;
changeValue(originalNum);
console.log("Outside function:", originalNum);

// Inside function: 15
// Outside function: 5 (unchanged!)
```

### Pass by Reference (Objects/Arrays)
When an object or array is passed to a function, the function receives a **reference** to the same memory location — so mutating it affects the original.
```js
function changeName(obj) {
  obj.name = "Sara";
}

let person = { name: "John" };
changeName(person);
console.log(person.name); // "Sara" (changed!)
```

**Important nuance:** *Reassigning* the parameter to an entirely new object does NOT affect the original (because the reference itself is passed by value):
```js
function replaceObject(obj) {
  obj = { name: "New Object" }; // reassigns local variable, doesn't affect original
}

let person = { name: "John" };
replaceObject(person);
console.log(person.name); // "John" (unaffected!)
```

### Summary Table
| | Primitives | Objects/Arrays |
|---|---|---|
| **Passed as** | A copy of the value | A reference to the memory location |
| **Modifying inside function** | Does NOT affect original | DOES affect original (if mutating, not reassigning) |
| **Reassigning inside function** | Never affects original | Does NOT affect original either |

---

## Pre and Post Increment

| Operator | Name | Behavior |
|---|---|---|
| `x++` | Post-increment | Returns the **current** value, THEN increments |
| `++x` | Pre-increment | Increments FIRST, THEN returns the **new** value |
| `x--` | Post-decrement | Returns the current value, THEN decrements |
| `--x` | Pre-decrement | Decrements first, THEN returns the new value |

```js
let x = 5;
console.log(x++); // 5 (returns old value first)
console.log(x);   // 6 (now incremented)

let y = 5;
console.log(++y); // 6 (increments first, then returns)
console.log(y);   // 6
```

### Side-by-Side Comparison
```js
let a = 10;
let b = a++; // b = 10 (old value), a becomes 11
console.log(a, b); // 11 10

let c = 10;
let d = ++c; // c becomes 11 first, d = 11 (new value)
console.log(c, d); // 11 11
```

### Common Use in Loops
```js
for (let i = 0; i < 5; i++) { // post-increment is conventional here
  console.log(i);
}
```

---

## Array Power Methods — map, forEach, filter, find, slice, reduce

| Method | Purpose | Returns | Mutates Original? |
|---|---|---|---|
| `map()` | Transforms each element | New array (same length) | No |
| `forEach()` | Runs a function per element (side effects) | `undefined` | No |
| `filter()` | Keeps elements matching a condition | New array (filtered) | No |
| `find()` | Finds the first matching element | Single element (or `undefined`) | No |
| `slice()` | Extracts a portion of the array | New array (subset) | No |
| `reduce()` | Reduces array to a single accumulated value | Any type (number, object, etc.) | No |

### `map()` — Transform Each Element
```js
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### `forEach()` — Loop with No Return Value
```js
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
// 2 4 6 (just logs, no new array returned)
```

### `filter()` — Keep Matching Elements
```js
let numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]
```

### `find()` — First Matching Element
```js
let numbers = [5, 12, 8, 130, 44];
let found = numbers.find(num => num > 10);
console.log(found); // 12 (first element greater than 10)
```

### `slice()` — Extract a Portion (Non-Destructive)
```js
let numbers = [10, 20, 30, 40, 50];
console.log(numbers.slice(1, 3)); // [20, 30]
console.log(numbers);             // unchanged: [10, 20, 30, 40, 50]
```

### `reduce()` — Reduce to a Single Value
```js
let numbers = [1, 2, 3, 4];

// Sum
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// Max value
let max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log(max); // 4

// Reducing into an object (counting occurrences)
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }
```

### Chaining Array Methods Together
```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = numbers
  .filter(num => num % 2 === 0)  // keep evens: [2,4,6,8,10]
  .map(num => num * num)         // square them: [4,16,36,64,100]
  .reduce((acc, num) => acc + num, 0); // sum: 220

console.log(result); // 220
```

### Quick Decision Guide
- Need to **transform** every element → `map()`
- Need to **just loop** (no new array) → `forEach()`
- Need to **keep some** elements → `filter()`
- Need **one specific** element → `find()`
- Need a **portion/copy** of the array → `slice()`
- Need to **combine everything into one value** (sum, object, etc.) → `reduce()`