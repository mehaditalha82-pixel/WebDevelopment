# JavaScript Fundamentals — Math, Variables & Data Types

A beginner-friendly reference covering the math needed for programming, your first JS program, variables (`var`/`let`/`const`), data types, naming conventions, number handling, and arithmetic operators.

---

## Table of Contents

1. [Introduction to JavaScript](#introduction-to-javascript)
2. [Math Needed for Programming](#math-needed-for-programming)
3. [Print Hello World](#print-hello-world)
4. [Variables](#variables)
5. [Variable Data Types](#variable-data-types-numeric-string-boolean)
6. [JS Keywords, Variable Names & Naming Convention](#javascript-keyword-variable-name-naming-convention)
7. [Fundamentals of JS Numbers](#fundamentals-of-js-numbers)
8. [Arithmetic Operators](#introduction-to-arithmetic-operators)
9. [Mathematical Operation Shorthand](#mathematical-operation-shorthand)

---

## Introduction to JavaScript

**JavaScript (JS)** is a lightweight, interpreted (or JIT-compiled) programming language that runs in web browsers and, via Node.js, on servers too. It's one of the three core technologies of the web alongside HTML (structure) and CSS (styling) — JavaScript adds **behavior/interactivity**.

**Key characteristics:**
- **Dynamically typed** — variable types are determined at runtime, not declared upfront.
- **Interpreted / JIT-compiled** — runs directly in the browser's JS engine (e.g., V8 in Chrome).
- **Single-threaded with an event loop** — handles asynchronous operations (like network requests) without blocking.
- **Multi-paradigm** — supports procedural, object-oriented, and functional programming styles.
- **Runs everywhere** — browsers, servers (Node.js), mobile apps (React Native), desktop apps (Electron).

```html
<script>
  console.log("JavaScript is running!");
</script>
```

---

## Math Needed for Programming

Before diving deep into JS, it helps to be comfortable with the basic math concepts that show up constantly in code.

### 1. Number: Positive, Negative, Zero
```js
let positive = 78;
let negative = -50;
let zero = 0;
```

### 2. Fraction (Decimal Numbers)
```js
let fraction1 = 0.5;
let fraction2 = 25.13;
```
In JS, all numbers (whole or decimal) belong to a single `Number` type — there's no separate "float" or "int" type like in some other languages.

### 3. Even & Odd Numbers
A number is **even** if it's exactly divisible by 2 (remainder 0), and **odd** otherwise.
```js
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(15));  // false (odd)
console.log(isEven(432)); // true (even)
```

### 4. Remainder (Modulo Operator `%`)
Gives what's left over after division.
```js
console.log(10 % 3); // 1  (3 goes into 10 three times, remainder 1)
console.log(15 % 4); // 3
```

### 5. Basic Math Operations: Add, Subtract, Multiply, Divide
```js
let a = 10, b = 3;

console.log(a + b); // 13 (addition)
console.log(a - b); // 7  (subtraction)
console.log(a * b); // 30 (multiplication)
console.log(a / b); // 3.333... (division)
```

### 6. Percentage
```js
let marks = 45;
let total = 50;
let percentage = (marks / total) * 100;
console.log(percentage + "%"); // 90%
```

### 7. Sum (Total of a Set of Numbers)
```js
let numbers = [10, 20, 30];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 60
```

### 8. Average
```js
let numbers = [10, 20, 30];
let avg = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
console.log(avg); // 20
```

### 9. Max / Min
```js
let numbers = [45, 21, 87];

console.log(Math.max(...numbers)); // 87
console.log(Math.min(...numbers)); // 21
```

### 10. Series (e.g., 0 to 10)
```js
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// Or generate as an array:
let series = Array.from({ length: 11 }, (_, i) => i);
console.log(series); // [0, 1, 2, ..., 10]
```

### 11. Calculation: Area of a Triangle
Formula: `Area = 1/2 * base * height`
```js
let base = 10;
let height = 6;
let area = 0.5 * base * height;
console.log(area); // 30
```

### 12. Share Profit (Split Among 3 People)
```js
let totalProfit = 9000;
let numberOfPeople = 3;
let sharePerPerson = totalProfit / numberOfPeople;
console.log(sharePerPerson); // 3000

// Unequal ratio example (e.g., 2:3:5 ratio)
let ratio = [2, 3, 5];
let totalRatio = ratio.reduce((a, b) => a + b, 0); // 10
let shares = ratio.map(r => (r / totalRatio) * totalProfit);
console.log(shares); // [1800, 2700, 4500]
```

---

## Print Hello World

```js
console.log("Hello, World!");
```

Other ways to display output in JS:
```js
alert("Hello, World!");        // Browser popup alert
document.write("Hello, World!"); // Writes directly into the HTML document (rarely used in modern code)
document.getElementById("output").innerText = "Hello, World!"; // Updates an existing element
```

`console.log()` is the standard way developers output/debug values — it prints to the browser's Developer Console (or terminal in Node.js).

---

## Variables

A **variable** is a named container used to store a value that can be referenced and changed later in your program.

```js
let age = 25;
age = 26; // value can change
```

### Difference between `var`, `let`, and `const`

| | `var` | `let` | `const` |
|---|---|---|---|
| **Scope** | Function-scoped | Block-scoped `{ }` | Block-scoped `{ }` |
| **Re-declaration** | Allowed (`var x; var x;` is fine) | Not allowed in the same scope | Not allowed in the same scope |
| **Re-assignment** | Allowed | Allowed | **Not allowed** — throws an error |
| **Hoisting** | Hoisted and initialized as `undefined` | Hoisted but NOT initialized (Temporal Dead Zone) | Hoisted but NOT initialized (Temporal Dead Zone) |
| **Must initialize on declaration?** | No | No | **Yes** — must be assigned a value immediately |
| **Modern usage** | Avoid — legacy, error-prone | Use for values that will change | Use by default, for values that won't be reassigned |

```js
// var - function scoped, can leak outside blocks
if (true) {
  var x = 10;
}
console.log(x); // 10 (accessible outside the if block!)

// let - block scoped
if (true) {
  let y = 20;
}
console.log(y); // ReferenceError: y is not defined

// const - block scoped AND cannot be reassigned
const z = 30;
z = 40; // TypeError: Assignment to constant variable.
```

**Rule of thumb:** Use `const` by default. Use `let` only when you know the value needs to change. Avoid `var` entirely in modern JavaScript.

### Common Mistakes with Variables

1. **Using `var` and expecting block scoping:**
   ```js
   for (var i = 0; i < 3; i++) {
     setTimeout(() => console.log(i), 100);
   }
   // Prints 3, 3, 3 (not 0, 1, 2) because var is function-scoped, not block-scoped
   // Fix: use `let` instead of `var`
   ```

2. **Trying to reassign a `const`:**
   ```js
   const total = 100;
   total = 200; // ❌ TypeError
   ```
   Note: `const` prevents *reassignment*, not mutation. Objects/arrays declared with `const` can still have their contents changed:
   ```js
   const arr = [1, 2, 3];
   arr.push(4); // ✅ allowed — the array's contents changed, not the reference
   console.log(arr); // [1, 2, 3, 4]
   ```

3. **Using a variable before declaring it (Temporal Dead Zone):**
   ```js
   console.log(score); // ❌ ReferenceError
   let score = 10;
   ```

4. **Forgetting to declare a variable at all (creates an accidental global):**
   ```js
   function setName() {
     username = "John"; // ❌ missing let/const/var — leaks into global scope
   }
   ```

5. **Confusing `=` (assignment) with `==`/`===` (comparison):**
   ```js
   let isActive = true;
   if (isActive = false) { ... } // ❌ this ASSIGNS false instead of comparing
   ```

---

## Variable Data Types: Numeric, String, Boolean

JavaScript has several primitive data types. The three most fundamental ones:

### Numeric (`number`)
Represents both integers and decimals — there's only one number type in JS.
```js
let age = 25;
let price = 19.99;
let negative = -10;

console.log(typeof age); // "number"
```

### String (`string`)
Represents text, wrapped in single quotes, double quotes, or backticks (template literals).
```js
let firstName = "John";
let lastName = 'Doe';
let fullName = `${firstName} ${lastName}`; // template literal (supports interpolation)

console.log(typeof firstName); // "string"
```

### Boolean (`boolean`)
Represents only two values: `true` or `false`. Used for logic/conditions.
```js
let isLoggedIn = true;
let hasPermission = false;

console.log(typeof isLoggedIn); // "boolean"
```

### Other Data Types (for completeness)
```js
let notAssigned;              // undefined
let empty = null;             // null (intentional absence of value)
let user = { name: "Sara" };  // object
let colors = ["red", "blue"]; // array (a type of object)
let id = Symbol("id");        // symbol
let bigNumber = 123n;         // BigInt
```

---

## JavaScript Keyword, Variable Name, Naming Convention

### Reserved Keywords
Words that JavaScript reserves for its own syntax and **cannot** be used as variable names:
```
let, const, var, function, return, if, else, for, while, switch,
case, break, continue, class, new, this, typeof, instanceof,
true, false, null, undefined, import, export, try, catch, finally
```

```js
let let = 5;    // ❌ SyntaxError — 'let' is a reserved keyword
let return = 1; // ❌ SyntaxError
```

### Rules for Naming Variables
- Must start with a **letter**, `_` (underscore), or `$` (dollar sign) — not a digit.
- Can contain letters, digits, underscores, and dollar signs after the first character.
- **Case-sensitive**: `age` and `Age` are different variables.
- Cannot use reserved keywords.
- Cannot contain spaces or special characters like `-`, `%`, `#`.

```js
let _score = 10;   // ✅ valid
let $price = 99;   // ✅ valid
let name1 = "Bob"; // ✅ valid
let 1name = "Bob"; // ❌ invalid — cannot start with a digit
let my-name = "x"; // ❌ invalid — hyphens not allowed
```

### Naming Conventions (Best Practices)

| Convention | Style | Example | Used For |
|---|---|---|---|
| **camelCase** | first word lowercase, subsequent words capitalized | `firstName`, `totalPrice` | Variables & functions (most common in JS) |
| **PascalCase** | every word capitalized | `UserProfile`, `Person` | Classes & constructors |
| **UPPER_SNAKE_CASE** | all caps with underscores | `MAX_LIMIT`, `API_KEY` | Constants that never change |
| **kebab-case** | lowercase with hyphens | `nav-bar`, `user-id` | CSS classes / HTML attributes (not valid in JS variable names) |

```js
let userAge = 25;             // camelCase ✅
const MAX_USERS = 100;        // constant convention ✅
class UserAccount { }         // PascalCase for classes ✅
```

Also, variable names should be **descriptive**:
```js
let x = 25;         // ❌ unclear
let userAge = 25;   // ✅ clear and descriptive
```

---

## Fundamentals of JS Numbers

JavaScript numbers are stored as double-precision 64-bit floating point values (IEEE 754) — there's no separate integer type.

```js
console.log(typeof 42);    // "number"
console.log(typeof 42.5);  // "number"
console.log(typeof -7);    // "number"
```

### Special Numeric Values
```js
console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log(0 / 0);        // NaN (Not a Number)
console.log(typeof NaN);   // "number" (yes, NaN is technically of type number!)
console.log(Number.isNaN(NaN)); // true — safer check than isNaN()
```

### Converting Data Types (Type Casting / Type Coercion)

**String → Number:**
```js
let str = "42";
console.log(Number(str));      // 42
console.log(parseInt(str));    // 42
console.log(parseFloat("3.14")); // 3.14
console.log(+str);             // 42 (unary plus shorthand)
```

**Number → String:**
```js
let num = 42;
console.log(String(num));    // "42"
console.log(num.toString()); // "42"
console.log(`${num}`);       // "42" (template literal)
```

**Any type → Boolean:**
```js
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));     // false
console.log(Boolean(1));       // true
console.log(Boolean("hello")); // true
console.log(Boolean([]));      // true (empty array is truthy!)
```

**Implicit coercion (be careful!):**
```js
console.log("5" + 3);   // "53"  (number converted to string, concatenation)
console.log("5" - 3);   // 2     (string converted to number, subtraction)
console.log("5" * "2"); // 10    (both converted to numbers)
console.log(true + 1);  // 2     (true becomes 1)
```

### Keeping 2 Decimal Digits

**`toFixed()`** — rounds a number to a fixed number of decimal places and returns a **string**.
```js
let price = 19.98765;

console.log(price.toFixed(2));       // "19.99" (string)
console.log(Number(price.toFixed(2))); // 19.99 (converted back to number)
```

```js
let total = 100 / 3;
console.log(total);            // 33.333333333333336
console.log(total.toFixed(2)); // "33.33"
```

**`Math.round()` alternative (for numeric result without string conversion):**
```js
let value = 19.98765;
let rounded = Math.round(value * 100) / 100;
console.log(rounded); // 19.99 (this is a number, not a string)
```

---

## Introduction to Arithmetic Operators

| Operator | Name | Example | Result |
|---|---|---|---|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `5 / 3` | `1.6666...` |
| `%` | Modulo (remainder) | `5 % 3` | `2` |
| `**` | Exponentiation (power) | `5 ** 2` | `25` |
| `++` | Increment | `let x = 5; x++;` | `x` becomes `6` |
| `--` | Decrement | `let x = 5; x--;` | `x` becomes `4` |

```js
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333333333333335
console.log(a % b);  // 1
console.log(a ** b); // 1000 (10 to the power of 3)
```

### Operator Precedence
JavaScript follows standard mathematical order of operations (PEMDAS):
```js
console.log(2 + 3 * 4);   // 14 (multiplication happens first)
console.log((2 + 3) * 4); // 20 (parentheses override precedence)
```

---

## Mathematical Operation Shorthand

JavaScript provides **compound assignment operators** that combine an arithmetic operation with assignment, letting you write shorter, cleaner code.

| Shorthand | Equivalent To | Example (`x = 10`) | Result |
|---|---|---|---|
| `x += 5` | `x = x + 5` | `x += 5` | `15` |
| `x -= 5` | `x = x - 5` | `x -= 5` | `5` |
| `x *= 5` | `x = x * 5` | `x *= 5` | `50` |
| `x /= 5` | `x = x / 5` | `x /= 5` | `2` |
| `x %= 3` | `x = x % 3` | `x %= 3` | `1` |
| `x **= 2` | `x = x ** 2` | `x **= 2` | `100` |
| `x++` | `x = x + 1` | `x++` | `11` |
| `x--` | `x = x - 1` | `x--` | `9` |

### Example in Practice
```js
let cartTotal = 100;

cartTotal += 50;  // add $50 → 150
cartTotal -= 20;  // subtract $20 (discount) → 130
cartTotal *= 1.1; // add 10% tax → 143
cartTotal = Number(cartTotal.toFixed(2)); // clean up decimals

console.log(cartTotal); // 143
```

### Pre vs Post Increment/Decrement
```js
let x = 5;
console.log(x++); // 5 (returns OLD value, then increments)
console.log(x);   // 6

let y = 5;
console.log(++y); // 6 (increments FIRST, then returns new value)
console.log(y);   // 6
```