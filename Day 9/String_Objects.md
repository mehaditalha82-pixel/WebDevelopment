# JavaScript Strings & Objects — Immutability, Methods, Dot vs Bracket Notation

A reference covering strings vs arrays, immutability, string comparison/case/trim methods, `slice`/`join`/concatenation/`includes`, and a full introduction to objects — properties, dot vs bracket notation, nested objects, deletion, and looping.

---

## Table of Contents

1. [String vs Array](#string-vs-array)
2. [Immutable Strings](#immutable-strings)
3. [Comparison, Lowercase, Uppercase and Trim](#comparison-lowercase-uppercase-and-trim)
4. [String Slice, Join, Concatenate and Includes](#string-slice-join-concatenate-and-includes)
5. [Introduction to Objects, Properties and Values](#introduction-to-objects-properties-and-values)
6. [Multiple Ways to Get and Set Object Properties](#multiple-ways-to-get-and-set-object-properties)
7. [Difference Between Dot Notation and Bracket Notation](#difference-between-dot-notation-and-bracket-notation)
8. [Keys, Values, Nested Objects and Delete](#keys-values-nested-objects-and-delete)
9. [Loop an Object and Ways to Declare an Object](#loop-an-object-and-ways-to-declare-an-object)

---

## String vs Array

| | **String** | **Array** |
|---|---|---|
| **What it stores** | A sequence of characters (text) | A collection of any values (numbers, strings, objects, etc.) |
| **Mutability** | **Immutable** — cannot be changed after creation | **Mutable** — elements can be changed, added, or removed |
| **Indexing** | Characters accessed by index (`str[0]`) | Elements accessed by index (`arr[0]`) |
| **`.length`** | Number of characters | Number of elements |
| **Common methods** | `slice()`, `trim()`, `toUpperCase()`, `includes()`, `split()` | `push()`, `pop()`, `slice()`, `splice()`, `map()`, `filter()` |
| **Conversion between them** | `str.split("")` → array of characters | `arr.join("")` → string |

```js
let str = "Hello";
let arr = ["H", "e", "l", "l", "o"];

console.log(str.length); // 5
console.log(arr.length); // 5

console.log(str[0]); // "H"
console.log(arr[0]); // "H"

// Converting between them
console.log(str.split(""));  // ["H", "e", "l", "l", "o"]
console.log(arr.join(""));   // "Hello"
```

**Key distinction:** Arrays are mutable — you can directly change an element (`arr[0] = "J"`). Strings are **immutable** — you cannot change a character in place; you must create a new string.

---

## Immutable Strings

In JavaScript, strings are **immutable**, meaning once created, their content cannot be changed. Any "modification" actually creates a **brand new string** rather than altering the original.

```js
let str = "Hello";
str[0] = "J"; // this silently does nothing (no error in non-strict mode)
console.log(str); // "Hello" — unchanged!
```

To "change" a string, you must reassign the variable to a new string value:
```js
let str = "Hello";
str = "J" + str.slice(1); // creates a NEW string
console.log(str); // "Jello"
```

### Why does this matter?
```js
let a = "Hello";
let b = a;

b = b.toUpperCase(); // creates a new string, doesn't touch 'a'

console.log(a); // "Hello" (unaffected)
console.log(b); // "HELLO"
```

Compare this to arrays (mutable):
```js
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4); // modifies the SAME array in memory

console.log(arr1); // [1, 2, 3, 4] — arr1 is affected too!
console.log(arr2); // [1, 2, 3, 4]
```

**Takeaway:** Every string method (`toUpperCase()`, `trim()`, `slice()`, etc.) **returns a new string** — it never modifies the original. You must capture the return value if you want to keep the change.

---

## Comparison, Lowercase, Uppercase and Trim

### String Comparison
Strings can be compared using standard comparison operators — comparison is based on Unicode character codes (essentially alphabetical order).
```js
console.log("apple" === "apple"); // true
console.log("apple" === "Apple"); // false (case-sensitive!)
console.log("apple" < "banana");  // true (a comes before b)
console.log("Apple" < "apple");   // true (uppercase letters have lower char codes than lowercase)
```

**`localeCompare()`** — a more robust way to compare strings (useful for sorting):
```js
console.log("apple".localeCompare("banana")); // -1 (apple comes first)
console.log("banana".localeCompare("apple")); // 1
console.log("apple".localeCompare("apple"));  // 0 (equal)
```

### Lowercase & Uppercase
```js
let text = "Hello World";

console.log(text.toLowerCase()); // "hello world"
console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text); // "Hello World" — original unchanged (strings are immutable)
```

**Case-insensitive comparison (common pattern):**
```js
let userInput = "YES";
if (userInput.toLowerCase() === "yes") {
  console.log("Confirmed!");
}
```

### Trim (Removing Whitespace)
```js
let text = "   Hello World   ";

console.log(text.trim());       // "Hello World" (removes both sides)
console.log(text.trimStart());  // "Hello World   " (removes only leading spaces)
console.log(text.trimEnd());    // "   Hello World" (removes only trailing spaces)
```
Commonly used to clean up user input from forms before validation or storage.

---

## String Slice, Join, Concatenate and Includes

### `slice(start, end)` — Extract a Substring
Extracts part of a string without modifying the original. Supports negative indexes.
```js
let str = "Hello World";

console.log(str.slice(0, 5));   // "Hello"
console.log(str.slice(6));      // "World" (from index 6 to end)
console.log(str.slice(-5));     // "World" (last 5 characters)
console.log(str.slice(-5, -1)); // "Worl" (up to but not including last char)
```

### `join()` — Combine Array Elements Into a String
`join()` is actually an **array** method (not a string method), but it's closely related since it produces a string.
```js
let words = ["Hello", "World", "!"];

console.log(words.join(" "));  // "Hello World !"
console.log(words.join(""));   // "HelloWorld!"
console.log(words.join(", ")); // "Hello, World, !"
```

### Concatenation — Combining Strings
```js
let first = "Hello";
let second = "World";

// Method 1: + operator
console.log(first + " " + second); // "Hello World"

// Method 2: concat() method
console.log(first.concat(" ", second)); // "Hello World"

// Method 3: Template literals (modern, most readable)
console.log(`${first} ${second}`); // "Hello World"

// Method 4: += operator
let greeting = "Hello";
greeting += " World";
console.log(greeting); // "Hello World"
```

### `includes()` — Check if a Substring Exists
Returns a boolean; case-sensitive.
```js
let str = "Hello World";

console.log(str.includes("World"));  // true
console.log(str.includes("world"));  // false (case-sensitive)
console.log(str.includes("xyz"));    // false
```

### Related String Search Methods
```js
console.log(str.indexOf("World"));   // 6 (index where it starts, -1 if not found)
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World"));   // true
```

---

## Introduction to Objects, Properties and Values

An **object** is a collection of related data stored as **key-value pairs**. Unlike arrays (which use numeric indexes), objects use named **properties** (keys) to access **values**.

```js
let person = {
  name: "John",
  age: 25,
  isStudent: false
};
```

- **Property (key)**: `name`, `age`, `isStudent` — always a string (or Symbol) internally.
- **Value**: `"John"`, `25`, `false` — can be any data type, including functions, arrays, or other objects.

### Why Use Objects?
Objects let you group related data together logically, instead of managing scattered individual variables.
```js
// Without an object (messy)
let personName = "John";
let personAge = 25;

// With an object (organized)
let person = { name: "John", age: 25 };
```

### Objects Can Contain Any Data Type (Including Functions — "Methods")
```js
let person = {
  name: "John",
  age: 25,
  greet: function() {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet(); // "Hi, I'm John"
```

---

## Multiple Ways to Get and Set Object Properties

### Getting (Reading) Properties
```js
let person = { name: "John", age: 25 };

// Dot notation
console.log(person.name); // "John"

// Bracket notation
console.log(person["age"]); // 25

// Destructuring
let { name, age } = person;
console.log(name, age); // "John" 25
```

### Setting (Updating/Adding) Properties
```js
let person = { name: "John" };

// Dot notation
person.age = 25;

// Bracket notation
person["city"] = "New York";

console.log(person); // { name: "John", age: 25, city: "New York" }
```

### Using a Variable as a Dynamic Key
```js
let key = "email";
let person = {};
person[key] = "john@example.com"; // only possible with bracket notation

console.log(person); // { email: "john@example.com" }
```

---

## Difference Between Dot Notation and Bracket Notation

| | **Dot Notation** (`obj.key`) | **Bracket Notation** (`obj["key"]`) |
|---|---|---|
| **Syntax** | `person.name` | `person["name"]` |
| **Dynamic keys (variables)?** | ❌ Not possible | ✅ Supported — key can be a variable/expression |
| **Keys with spaces/special characters?** | ❌ Not possible | ✅ Supported |
| **Keys starting with a number?** | ❌ Not possible | ✅ Supported |
| **Readability** | Cleaner, more common | Slightly more verbose but more flexible |

```js
let person = {
  "first name": "John", // key has a space
  age: 25
};

console.log(person.first name);   // ❌ SyntaxError
console.log(person["first name"]); // ✅ "John"

// Dynamic key example
let key = "age";
console.log(person.key);    // ❌ undefined (looks for a literal property called "key")
console.log(person[key]);   // ✅ 25 (uses the VALUE of the variable key)
```

**Rule of thumb:** Use dot notation by default for clean, static property names. Use bracket notation when the key is dynamic (stored in a variable), contains spaces/special characters, or starts with a number.

---

## Keys, Values, Nested Objects and Delete

### Getting All Keys, Values, or Entries
```js
let person = { name: "John", age: 25, city: "New York" };

console.log(Object.keys(person));   // ["name", "age", "city"]
console.log(Object.values(person)); // ["John", 25, "New York"]
console.log(Object.entries(person));
// [["name", "John"], ["age", 25], ["city", "New York"]]
```

### Nested Objects
Objects can contain other objects (or arrays) as values, allowing complex, structured data.
```js
let person = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001"
  },
  hobbies: ["reading", "gaming"]
};

console.log(person.address.city);     // "New York"
console.log(person["address"]["zip"]); // "10001"
console.log(person.hobbies[0]);        // "reading"
```

**Updating a nested property:**
```js
person.address.city = "Boston";
console.log(person.address.city); // "Boston"
```

### Deleting a Property
```js
let person = { name: "John", age: 25, city: "New York" };

delete person.city;
console.log(person); // { name: "John", age: 25 }

console.log(person.city); // undefined
```

---

## Loop an Object and Ways to Declare an Object

### Looping Through an Object

**`for...in` — iterates over keys:**
```js
let person = { name: "John", age: 25, city: "New York" };

for (let key in person) {
  console.log(key, ":", person[key]);
}
// name : John
// age : 25
// city : New York
```

**Using `Object.keys()` with `forEach`:**
```js
Object.keys(person).forEach(key => {
  console.log(key, ":", person[key]);
});
```

**Using `Object.entries()` with destructuring (modern, clean):**
```js
for (let [key, value] of Object.entries(person)) {
  console.log(key, ":", value);
}
```

### Ways to Declare an Object

**1. Object literal (most common):**
```js
let person = { name: "John", age: 25 };
```

**2. Using the `new Object()` constructor:**
```js
let person = new Object();
person.name = "John";
person.age = 25;
```

**3. Using `Object.create()`:**
```js
let person = Object.create(null); // creates object with no prototype
person.name = "John";
```

**4. Using a constructor function:**
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person1 = new Person("John", 25);
console.log(person1.name); // "John"
```

**5. Using an ES6 Class:**
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let person2 = new Person("Sara", 30);
console.log(person2.name); // "Sara"
```

**6. Using `Object.assign()` (merging/copying objects):**
```js
let defaults = { theme: "light", fontSize: 14 };
let userPrefs = { fontSize: 18 };

let settings = Object.assign({}, defaults, userPrefs);
console.log(settings); // { theme: "light", fontSize: 18 }
```

**7. Using the spread operator (shallow copy/merge):**
```js
let defaults = { theme: "light", fontSize: 14 };
let settings = { ...defaults, fontSize: 18 };
console.log(settings); // { theme: "light", fontSize: 18 }
```