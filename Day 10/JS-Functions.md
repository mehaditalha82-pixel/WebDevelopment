# JavaScript Functions — Syntax, Parameters, Return Values & Practical Examples

A reference covering function syntax, parameters vs arguments, how functions work, return values, conditional returns, parameter types, and hands-on array practice problems.

---

## Table of Contents

1. [Function Syntax](#function-syntax)
2. [Function Parameters — Handling Multiple Parameters](#function-parameters--handling-multiple-parameters)
3. [How Functions Work — Argument vs Parameter](#how-functions-work--argument-vs-parameter)
4. [Function Return & Assigning Return Value to a Variable](#function-return--assigning-return-value-to-a-variable)
5. [Conditional Return of Odd and Even](#conditional-return-of-odd-and-even)
6. [Different Types of Parameters for a Function](#different-types-of-parameters-for-a-function)
7. [Practice: Sum of All Numbers in an Array](#practice-sum-of-all-numbers-in-an-array-using-function)
8. [Practice: Return All the Even Numbers of an Array](#practice-return-all-the-even-numbers-of-an-array)

---

## Function Syntax

A **function** is a reusable block of code designed to perform a specific task. Instead of repeating code, you define it once and "call" (invoke) it whenever needed.

### Function Declaration (Basic Syntax)
```js
function functionName(parameter1, parameter2) {
  // code to execute
  return result; // optional
}
```

### Example
```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Hello, John!
```

### Other Ways to Write Functions

**Function Expression:**
```js
const greet = function(name) {
  console.log("Hello, " + name + "!");
};
greet("Sara");
```

**Arrow Function (ES6, modern shorthand):**
```js
const greet = (name) => {
  console.log("Hello, " + name + "!");
};
greet("Alex");

// Implicit return (single expression, no braces needed)
const square = (num) => num * num;
console.log(square(5)); // 25
```

**Anonymous Function (no name, often used as a callback):**
```js
setTimeout(function() {
  console.log("Runs after 1 second");
}, 1000);
```

---

## Function Parameters — Handling Multiple Parameters

**Parameters** are placeholders listed in the function definition — they receive whatever values are passed in when the function is called.

```js
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 10)); // 15
```

### Handling Multiple Parameters
```js
function createUser(name, age, city) {
  console.log(`${name} is ${age} years old and lives in ${city}.`);
}

createUser("John", 25, "New York");
// John is 25 years old and lives in New York.
```

### What Happens with Extra or Missing Arguments?
```js
function add(a, b) {
  return a + b;
}

console.log(add(5, 10, 20)); // 15 (extra argument 20 is simply ignored)
console.log(add(5));         // NaN (b is undefined; 5 + undefined = NaN)
```

### Default Parameters (Handling Missing Values Gracefully)
```js
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();        // "Hello, Guest"
greet("John");  // "Hello, John"
```

---

## How Functions Work — Argument vs Parameter

### How a Function Works (Execution Flow)
1. The function is **defined** (code is written but not yet executed).
2. The function is **called/invoked** with specific values.
3. Those values are assigned to the function's parameters.
4. The function body runs using those values.
5. If a `return` statement exists, the function sends a value back to where it was called.

```js
function multiply(x, y) {  // Step 1: definition
  return x * y;            // Step 4 & 5: runs and returns
}

let result = multiply(4, 5); // Step 2 & 3: called with arguments 4 and 5
console.log(result); // 20
```

### Parameter vs Argument — Key Difference

| | **Parameter** | **Argument** |
|---|---|---|
| **Definition** | A named variable listed in the function's definition | The actual value passed to the function when it's called |
| **Where it appears** | In the function declaration | In the function call |
| **Example** | `function greet(name)` → `name` is the parameter | `greet("John")` → `"John"` is the argument |

```js
function greet(name) {     // 'name' is a PARAMETER
  console.log("Hi " + name);
}

greet("John");              // "John" is the ARGUMENT
```

**Memory tip:** Parameters are the "labels" in the function's blueprint. Arguments are the actual "values" you hand over when calling it.

---

## Function Return & Assigning Return Value to a Variable

The `return` statement sends a value back to wherever the function was called, and immediately **stops** the function's execution.

```js
function add(a, b) {
  return a + b;
  console.log("This never runs"); // unreachable code after return
}

console.log(add(3, 4)); // 7
```

### Assigning the Returned Value to a Variable
```js
function square(num) {
  return num * num;
}

let result = square(6); // 'result' now holds the returned value
console.log(result);    // 36
```

### Functions Without a `return` Statement
If a function has no `return`, it implicitly returns `undefined`.
```js
function sayHi() {
  console.log("Hi!");
  // no return statement
}

let output = sayHi(); // logs "Hi!"
console.log(output);  // undefined
```

### Using Returned Values in Further Calculations
```js
function getTax(amount) {
  return amount * 0.1;
}

function getTotal(amount) {
  let tax = getTax(amount); // use one function's return value inside another
  return amount + tax;
}

console.log(getTotal(100)); // 110
```

---

## Conditional Return of Odd and Even

```js
function checkOddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkOddEven(7));  // "Odd"
console.log(checkOddEven(10)); // "Even"
```

### Using Ternary Operator (Shorter Version)
```js
function checkOddEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkOddEven(15)); // "Odd"
console.log(checkOddEven(42)); // "Even"
```

### Storing the Result in a Variable
```js
let num = 23;
let result = checkOddEven(num);
console.log(`${num} is ${result}`); // "23 is Odd"
```

### Practical Extension: Checking a List of Numbers
```js
function checkOddEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

let numbers = [4, 7, 10, 15, 22];

numbers.forEach(num => {
  console.log(`${num} is ${checkOddEven(num)}`);
});
// 4 is Even
// 7 is Odd
// 10 is Even
// 15 is Odd
// 22 is Even
```

---

## Different Types of Parameters for a Function

### 1. Required Parameters (Basic)
```js
function add(a, b) {
  return a + b;
}
```

### 2. Default Parameters
Provide a fallback value if no argument (or `undefined`) is passed.
```js
function greet(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greet();                  // "Hello, Guest!"
greet("John");             // "Hello, John!"
greet("John", "Welcome");  // "Welcome, John!"
```

### 3. Rest Parameters (`...`)
Collects any number of arguments into a single **array** — useful when you don't know how many arguments will be passed.
```js
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3));       // 6
console.log(sumAll(1, 2, 3, 4, 5)); // 15
```

### 4. Destructured Parameters (Object/Array)
Extract specific properties directly in the parameter list — very common for functions accepting configuration objects.
```js
function createUser({ name, age, city = "Unknown" }) {
  console.log(`${name}, ${age}, from ${city}`);
}

createUser({ name: "John", age: 25 }); // "John, 25, from Unknown"
```

### 5. `arguments` Object (Older/Legacy Way)
Available inside regular (non-arrow) functions — an array-like object containing all passed arguments, regardless of declared parameters.
```js
function showArgs() {
  console.log(arguments);
}

showArgs(1, "hello", true); // [1, "hello", true]
```
**Note:** Arrow functions do **not** have their own `arguments` object — use rest parameters (`...args`) instead in modern code.

### Comparison Table

| Parameter Type | Syntax | Use Case |
|---|---|---|
| Required | `function fn(a, b)` | Fixed, known number of inputs |
| Default | `function fn(a = 10)` | Provide fallback values |
| Rest | `function fn(...args)` | Unknown/variable number of arguments |
| Destructured | `function fn({ a, b })` | Passing a config/options object |
| `arguments` object | (implicit, inside function body) | Legacy access to all arguments |

---

## Practice: Sum of All Numbers in an Array Using Function

```js
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

let numbers = [10, 20, 30, 40];
console.log(sumArray(numbers)); // 100
```

### Alternative Using `reduce()`
```js
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
```

### Alternative Using `for...of`
```js
function sumArray(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}

console.log(sumArray([5, 15, 25])); // 45
```

---

## Practice: Return All the Even Numbers of an Array

```js
function getEvenNumbers(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(getEvenNumbers(numbers)); // [2, 4, 6, 8]
```

### Alternative Using `filter()` (More Concise)
```js
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers([10, 15, 22, 33, 40])); // [10, 22, 40]
```

### Bonus: Combine Both — Sum of Only the Even Numbers
```js
function sumOfEvens(arr) {
  return arr
    .filter(num => num % 2 === 0)
    .reduce((total, num) => total + num, 0);
}

console.log(sumOfEvens([1, 2, 3, 4, 5, 6])); // 12 (2 + 4 + 6)
```