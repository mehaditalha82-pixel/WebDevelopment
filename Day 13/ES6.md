# ES6 Introduction — Modern JavaScript Features

A complete reference covering why ES6 matters, `var`/`let`/`const`, default parameters, template strings, spread/rest operators, arrow functions, destructuring, object methods, and optional chaining.

---

## Table of Contents

1. [Why Need ES6 (ECMAScript 6)?](#1-why-need-es6-ecmascript-6)
2. [Difference Between var, let, and const](#difference-between-var-let-and-const)
3. [Default Parameter](#default-parameter)
4. [Template String](#template-string)
5. [Spread and Rest Operator](#spread-and-rest-operator--array-max-and-arrayobject-copy)
6. [Arrow Functions — Syntax, Parameters, Return](#arrow-functions--syntax-parameters-return)
7. [Destructuring from Array and Object](#destructuring-from-array-and-object)
8. [Object Methods — Keys, Values, Entries, Delete, Seal, Freeze](#object-methods--keys-values-entries-delete-seal-freeze)
9. [Nested Object, Optional Chaining & Object Looping](#nested-object-optional-chaining--object-looping)

---

## 1. Why Need ES6 (ECMAScript 6)?

**ES6** (ECMAScript 2015) was a major update to JavaScript that introduced modern syntax and features to make code more readable, concise, and powerful. Before ES6, JavaScript lacked many conveniences developers now consider essential.

### Problems ES6 Solved

| Problem in Old JS (ES5) | ES6 Solution |
|---|---|
| `var` had confusing function-scoping and hoisting issues | `let` and `const` introduced proper block scoping |
| String concatenation was clunky (`"Hi " + name + "!"`) | Template literals (`` `Hi ${name}!` ``) |
| No clean way to write short functions | Arrow functions (`(a, b) => a + b`) |
| Verbose way to extract object/array values | Destructuring assignment |
| No default parameter support | Default parameters (`function fn(x = 10)`) |
| Copying/merging objects & arrays was tedious | Spread/rest operators |
| No built-in classes (had to fake OOP with prototypes) | `class` syntax |
| No native way to handle async code cleanly | Promises |
| No built-in module system | `import`/`export` |

### Example: Before vs After ES6
```js
// ES5 (old way)
var name = "John";
var greeting = "Hello, " + name + "!";
var add = function(a, b) {
  return a + b;
};

// ES6 (modern way)
const name = "John";
const greeting = `Hello, ${name}!`;
const add = (a, b) => a + b;
```

**In short:** ES6 made JavaScript significantly more readable, safer (fewer bugs from scoping issues), and expressive — bringing it in line with modern programming language conventions.

---

## Difference Between var, let, and const

| | `var` | `let` | `const` |
|---|---|---|---|
| **Scope** | Function-scoped | Block-scoped | Block-scoped |
| **Re-declaration** | Allowed | Not allowed | Not allowed |
| **Re-assignment** | Allowed | Allowed | **Not allowed** |
| **Hoisting** | Hoisted, initialized as `undefined` | Hoisted but in Temporal Dead Zone | Hoisted but in Temporal Dead Zone |
| **Introduced in** | Original JS | ES6 | ES6 |

```js
// var - leaks outside blocks
if (true) {
  var x = 10;
}
console.log(x); // 10 (accessible!)

// let - block scoped, reassignable
let y = 20;
y = 25; // ✅ allowed

// const - block scoped, cannot be reassigned
const z = 30;
z = 40; // ❌ TypeError
```

**Best practice:** Use `const` by default, `let` when reassignment is needed, and avoid `var` in modern code.

---

## Default Parameter

Default parameters let you assign a fallback value to a function parameter if no argument (or `undefined`) is passed.

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();        // "Hello, Guest!"
greet("John");  // "Hello, John!"
```

### Multiple Default Parameters
```js
function createOrder(item, quantity = 1, price = 0) {
  console.log(`${quantity}x ${item} at $${price} each`);
}

createOrder("Book");                // 1x Book at $0 each
createOrder("Book", 3, 15);         // 3x Book at $15 each
```

### Default Parameters Can Reference Earlier Parameters
```js
function calculateTotal(price, tax = price * 0.1) {
  return price + tax;
}

console.log(calculateTotal(100)); // 110
```

**Before ES6 (manual workaround):**
```js
function greet(name) {
  name = name || "Guest"; // old-school default value pattern
  console.log("Hello, " + name);
}
```

---

## Template String

**Template literals** (also called template strings) use backticks (`` ` ``) instead of quotes, allowing embedded expressions and multi-line strings without concatenation.

```js
let name = "John";
let age = 25;

let message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // "My name is John and I am 25 years old."
```

### Difference Between Traditional String and Template String

| | Traditional String (`""` or `''`) | Template String (`` `` ``) |
|---|---|---|
| **Concatenation** | Requires `+` operator | Embed variables directly with `${}` |
| **Multi-line text** | Requires `\n` or string concatenation | Naturally supports line breaks |
| **Expression evaluation** | Not possible inline | Can embed any JS expression inside `${}` |
| **Readability** | Gets messy with many variables | Clean and readable |

```js
// Traditional string concatenation
let greeting1 = "Hello, " + name + "! You are " + age + " years old.";

// Template string
let greeting2 = `Hello, ${name}! You are ${age} years old.`;
```

### Multi-line Strings
```js
// Traditional (needs \n or concatenation)
let poem1 = "Roses are red,\nViolets are blue.";

// Template literal (natural line breaks)
let poem2 = `Roses are red,
Violets are blue.`;
```

### Embedding Expressions
```js
let a = 5, b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// "The sum of 5 and 10 is 15."

function getDiscount(price) {
  return price > 100 ? "10% off" : "No discount";
}
console.log(`Discount status: ${getDiscount(150)}`);
// "Discount status: 10% off"
```

---

## Spread and Rest Operator — Array Max and Array/Object Copy

Both use the same `...` syntax but serve **opposite purposes**.

### Diff of Spread and Rest

| | **Spread (`...`)** | **Rest (`...`)** |
|---|---|---|
| **Purpose** | **Expands** an array/object into individual elements | **Collects** multiple values into a single array |
| **Used in** | Function calls, array/object literals | Function parameters, destructuring |
| **Direction** | "Unpacks" a collection | "Packs" values into a collection |

```js
// SPREAD - expands an array into individual values
let numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3 (spreads into Math.max(1, 2, 3))

// REST - collects individual values into an array
function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10 (collects args into [1,2,3,4])
```

### Finding Max/Min of an Array (Spread)
```js
let numbers = [45, 21, 87, 12, 99];

console.log(Math.max(...numbers)); // 99
console.log(Math.min(...numbers)); // 12
```

### Copying an Array (Spread)
```js
let original = [1, 2, 3];
let copy = [...original]; // shallow copy — new array, not same reference

copy.push(4);
console.log(original); // [1, 2, 3] (unaffected)
console.log(copy);     // [1, 2, 3, 4]
```

### Merging Arrays (Spread)
```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4]
```

### Copying an Object (Spread)
```js
let person = { name: "John", age: 25 };
let personCopy = { ...person };

personCopy.age = 30;
console.log(person);     // { name: "John", age: 25 } (unaffected)
console.log(personCopy); // { name: "John", age: 30 }
```

### Merging Objects (Spread) — Later Properties Override Earlier Ones
```js
let defaults = { theme: "light", fontSize: 14 };
let userPrefs = { fontSize: 18 };

let settings = { ...defaults, ...userPrefs };
console.log(settings); // { theme: "light", fontSize: 18 }
```

### Rest in Destructuring
```js
let [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40, 50]

let { name, ...otherInfo } = { name: "John", age: 25, city: "NY" };
console.log(name);      // "John"
console.log(otherInfo); // { age: 25, city: "NY" }
```

---

## Arrow Functions — Syntax, Parameters, Return

Arrow functions provide a shorter syntax for writing functions, introduced in ES6.

### Basic Syntax
```js
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 3)); // 8
```

### Implicit Return (No Braces, No `return` Keyword Needed)
```js
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

### Parameter Variations
```js
// No parameters - parentheses required
const sayHi = () => console.log("Hi!");

// Single parameter - parentheses optional
const square = num => num * num;
const square2 = (num) => num * num; // also valid

// Multiple parameters - parentheses required
const multiply = (a, b) => a * b;
```

### Returning an Object Literal (Needs Extra Parentheses)
```js
const createUser = (name, age) => ({ name: name, age: age });
console.log(createUser("John", 25)); // { name: "John", age: 25 }
```
Without the parentheses, `{ }` would be interpreted as a function body, not an object.

### Difference Between Traditional and Arrow Functions

| | **Traditional Function** | **Arrow Function** |
|---|---|---|
| **Syntax** | `function fn(a, b) { return a + b; }` | `(a, b) => a + b` |
| **`this` binding** | Has its own `this`, determined by how it's called | Does **not** have its own `this` — inherits `this` from the surrounding (lexical) scope |
| **`arguments` object** | Available | **Not available** (use rest parameters instead) |
| **Used as constructor (`new`)?** | Yes | **No** — throws an error if used with `new` |
| **Hoisting** | Function declarations are hoisted | Arrow functions (as expressions) are NOT hoisted |
| **Best suited for** | Object methods, constructors | Callbacks, short one-line functions |

### The Critical `this` Difference (Common Interview Topic)
```js
function Timer() {
  this.seconds = 0;

  // Traditional function - 'this' refers to whatever called it (often wrong here)
  setInterval(function() {
    this.seconds++; // 'this' is NOT the Timer object here (it's undefined/global)
    console.log(this.seconds); // NaN
  }, 1000);
}

function TimerFixed() {
  this.seconds = 0;

  // Arrow function - inherits 'this' from TimerFixed's scope
  setInterval(() => {
    this.seconds++; // 'this' correctly refers to the TimerFixed instance
    console.log(this.seconds); // 1, 2, 3...
  }, 1000);
}
```

---

## Destructuring from Array and Object

**Destructuring** lets you unpack values from arrays or properties from objects into individual variables in a single, concise statement.

### Array Destructuring
```js
let colors = ["red", "green", "blue"];

let [first, second, third] = colors;
console.log(first);  // "red"
console.log(second); // "green"
console.log(third);  // "blue"
```

**Skipping elements:**
```js
let [primary, , tertiary] = colors; // skip "green"
console.log(primary);  // "red"
console.log(tertiary); // "blue"
```

**Default values:**
```js
let [a, b, c, d = "yellow"] = colors;
console.log(d); // "yellow" (colors only has 3 elements)
```

**Swapping variables (elegant use case):**
```js
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1
```

### Object Destructuring
```js
let person = { name: "John", age: 25, city: "New York" };

let { name, age, city } = person;
console.log(name); // "John"
console.log(age);  // 25
```

**Renaming variables while destructuring:**
```js
let { name: fullName, age: years } = person;
console.log(fullName); // "John"
console.log(years);    // 25
```

**Default values:**
```js
let { name, country = "USA" } = person;
console.log(country); // "USA" (person doesn't have a 'country' property)
```

**Nested destructuring:**
```js
let user = {
  name: "John",
  address: { city: "New York", zip: "10001" }
};

let { address: { city, zip } } = user;
console.log(city); // "New York"
console.log(zip);  // "10001"
```

**Destructuring in function parameters:**
```js
function displayUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
displayUser(person); // "John is 25 years old"
```

---

## Object Methods — Keys, Values, Entries, Delete, Seal, Freeze

### `Object.keys()`, `Object.values()`, `Object.entries()`
```js
let person = { name: "John", age: 25, city: "NY" };

console.log(Object.keys(person));   // ["name", "age", "city"]
console.log(Object.values(person)); // ["John", 25, "NY"]
console.log(Object.entries(person));
// [["name", "John"], ["age", 25], ["city", "NY"]]
```

### `delete` — Remove a Property
```js
delete person.city;
console.log(person); // { name: "John", age: 25 }
```

### `Object.freeze()` — Fully Locks an Object
Prevents adding, removing, **or modifying** any property. The object becomes completely immutable.
```js
let settings = { theme: "dark" };
Object.freeze(settings);

settings.theme = "light"; // silently fails (no error in non-strict mode)
settings.fontSize = 16;   // also fails - can't add new properties

console.log(settings); // { theme: "dark" } (unchanged)
console.log(Object.isFrozen(settings)); // true
```

### `Object.seal()` — Locks Structure but Allows Editing Existing Values
Prevents adding or removing properties, but **existing property values can still be changed**.
```js
let settings = { theme: "dark" };
Object.seal(settings);

settings.theme = "light";  // ✅ allowed - existing property can be modified
settings.fontSize = 16;    // ❌ fails - cannot add new properties
delete settings.theme;     // ❌ fails - cannot delete properties

console.log(settings); // { theme: "light" }
console.log(Object.isSealed(settings)); // true
```

### `freeze()` vs `seal()` — Quick Comparison
| | `Object.freeze()` | `Object.seal()` |
|---|---|---|
| Add new properties | ❌ No | ❌ No |
| Delete properties | ❌ No | ❌ No |
| Modify existing values | ❌ No | ✅ Yes |

---

## Nested Object, Optional Chaining & Object Looping

### Nested Objects
```js
let company = {
  name: "TechCorp",
  address: {
    city: "San Francisco",
    country: "USA"
  },
  employees: [
    { name: "John", role: "Developer" },
    { name: "Sara", role: "Designer" }
  ]
};

console.log(company.address.city);      // "San Francisco"
console.log(company.employees[0].name); // "John"
```

### Optional Chaining (`?.`)
Optional chaining safely accesses deeply nested properties **without throwing an error** if an intermediate property doesn't exist — it simply returns `undefined` instead.

```js
let user = { name: "John" }; // no 'address' property

// Without optional chaining - throws an error
console.log(user.address.city); // ❌ TypeError: Cannot read properties of undefined

// With optional chaining - safely returns undefined
console.log(user?.address?.city); // undefined (no error!)
```

**Practical example:**
```js
let users = [
  { name: "John", address: { city: "NY" } },
  { name: "Sara" } // no address property
];

users.forEach(user => {
  console.log(user?.address?.city ?? "City not available");
});
// "NY"
// "City not available"
```

**Optional chaining with function calls:**
```js
let obj = {
  greet: function() { return "Hi!"; }
};

console.log(obj.greet?.());   // "Hi!" (method exists)
console.log(obj.sayBye?.());  // undefined (method doesn't exist, no error)
```

**Optional chaining with arrays:**
```js
let data = { items: [1, 2, 3] };
console.log(data.items?.[0]);  // 1
console.log(data.missing?.[0]); // undefined (no error)
```

### Object Looping (Recap)
```js
let person = { name: "John", age: 25, city: "NY" };

// for...in
for (let key in person) {
  console.log(key, ":", person[key]);
}

// Object.entries() + for...of (modern, clean)
for (let [key, value] of Object.entries(person)) {
  console.log(key, ":", value);
}

// Object.keys() + forEach
Object.keys(person).forEach(key => {
  console.log(key, ":", person[key]);
});
```