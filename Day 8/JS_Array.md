# JavaScript Arrays — Fundamentals, Methods, Traversal, Slice/Splice & Sorting

A complete reference covering array basics, indexing, adding/removing elements, common array methods, traversal, `slice`/`splice`, sorting, and interview questions.

---

## Table of Contents

1. [Fundamental Concept of Array](#fundamental-concept-of-array)
2. [Array Length, Index, Get and Set by Index](#array-length-index-get-and-set-by-index)
3. [Add/Remove Elements — push, pop, shift & unshift](#addremove-elements-from-arrays-using-push-pop-shift--unshift)
4. [Basic Array Methods & isArray](#all-about-basic-array-methods-isarray)
5. [Array Traversal Using for and while Loop](#array-traversal-using-for-and-while-loop)
6. [Slice and Splice an Array](#slice-and-splice-an-array)
7. [Sorting in JS — Ascending, Descending, on Strings](#sorting-in-js--ascending-descending-on-strings)
8. [Interview Questions & Answers](#interview-questions--answers)

---

## Fundamental Concept of Array

An **array** is a single variable used to store multiple values in an ordered, indexed list. Instead of creating separate variables for each value, an array groups related data together.

```js
let fruits = ["Apple", "Banana", "Mango"];
let numbers = [10, 20, 30, 40];
let mixed = [1, "hello", true, null, { name: "Sara" }]; // arrays can hold mixed types
```

### Key Characteristics
- **Ordered** — elements maintain their insertion order.
- **Zero-indexed** — the first element is at index `0`, not `1`.
- **Dynamic size** — arrays can grow or shrink; no fixed size needed upfront.
- **Mixed types allowed** — a single array can hold numbers, strings, objects, even other arrays.
- Technically a special type of **object** in JavaScript (`typeof [] === "object"`).

### Creating Arrays
```js
let arr1 = [1, 2, 3];              // array literal (most common)
let arr2 = new Array(1, 2, 3);     // array constructor
let arr3 = new Array(5);           // creates an array with length 5 (empty slots)
let arr4 = Array.of(5);            // creates [5] — a single-element array
```

---

## Array Length, Index, Get and Set by Index

### Length
The `.length` property returns the number of elements in an array.
```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.length); // 3
```

### Index (Zero-Based)
Each element has a numeric position, starting at `0`.
```js
let fruits = ["Apple", "Banana", "Mango"];
//              0         1         2

console.log(fruits[0]); // "Apple"
console.log(fruits[2]); // "Mango"
console.log(fruits[fruits.length - 1]); // "Mango" (last element, safe for any length)
```

### Get (Read) a Value by Index
```js
console.log(fruits[1]); // "Banana"
console.log(fruits[10]); // undefined (index doesn't exist)
```

### Set (Update) a Value by Index
```js
fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Mango"]

// Assigning beyond current length extends the array (creates empty slots in between)
fruits[5] = "Grapes";
console.log(fruits); // ["Apple", "Orange", "Mango", <2 empty items>, "Grapes"]
console.log(fruits.length); // 6
```

---

## Add/Remove Elements from Arrays Using push, pop, shift & unshift

| Method | Action | Modifies Original? | Returns |
|---|---|---|---|
| `push()` | Adds element(s) to the **end** | Yes | New length |
| `pop()` | Removes the **last** element | Yes | The removed element |
| `unshift()` | Adds element(s) to the **beginning** | Yes | New length |
| `shift()` | Removes the **first** element | Yes | The removed element |

### `push()` — Add to End
```js
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits); // ["Apple", "Banana", "Mango"]

fruits.push("Grapes", "Orange"); // can push multiple at once
console.log(fruits); // ["Apple", "Banana", "Mango", "Grapes", "Orange"]
```

### `pop()` — Remove from End
```js
let fruits = ["Apple", "Banana", "Mango"];
let removed = fruits.pop();
console.log(removed); // "Mango"
console.log(fruits);  // ["Apple", "Banana"]
```

### `unshift()` — Add to Beginning
```js
let fruits = ["Banana", "Mango"];
fruits.unshift("Apple");
console.log(fruits); // ["Apple", "Banana", "Mango"]
```

### `shift()` — Remove from Beginning
```js
let fruits = ["Apple", "Banana", "Mango"];
let removed = fruits.shift();
console.log(removed); // "Apple"
console.log(fruits);  // ["Banana", "Mango"]
```

**Memory tip:** `push`/`pop` work at the **end** (like a stack). `unshift`/`shift` work at the **beginning** (shifting all other elements' indexes).

---

## All About Basic Array Methods, isArray

### Common Array Methods

| Method | Purpose | Mutates Original? |
|---|---|---|
| `.indexOf(value)` | Finds first index of a value (-1 if not found) | No |
| `.includes(value)` | Checks if a value exists (returns boolean) | No |
| `.join(separator)` | Joins all elements into a string | No |
| `.concat(arr2)` | Combines two or more arrays | No |
| `.reverse()` | Reverses the array order | **Yes** |
| `.find(callback)` | Returns the first element matching a condition | No |
| `.filter(callback)` | Returns a new array with elements matching a condition | No |
| `.map(callback)` | Returns a new array with transformed elements | No |
| `.forEach(callback)` | Runs a function for each element (no return array) | No |
| `.reduce(callback, initial)` | Reduces array to a single accumulated value | No |
| `Array.isArray(value)` | Checks whether a value is an array | No |

```js
let numbers = [10, 20, 30, 40];

console.log(numbers.indexOf(30));       // 2
console.log(numbers.includes(50));      // false
console.log(numbers.join(", "));        // "10, 20, 30, 40"
console.log(numbers.concat([50, 60]));  // [10, 20, 30, 40, 50, 60]
console.log(numbers.reverse());         // [40, 30, 20, 10]

console.log(numbers.find(n => n > 25));    // 40 (first match after reverse)
console.log(numbers.filter(n => n > 15));  // all matching elements
console.log(numbers.map(n => n * 2));      // each element doubled
console.log(numbers.reduce((acc, n) => acc + n, 0)); // sum of all elements
```

### `Array.isArray()`
Since `typeof` returns `"object"` for arrays (not `"array"`), use `Array.isArray()` to reliably check.
```js
console.log(typeof [1, 2, 3]);       // "object" (not useful for checking arrays!)
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello"));   // false
console.log(Array.isArray({ a: 1 }));  // false
```

---

## Array Traversal Using for and while Loop

### Using a `for` Loop
```js
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output: Apple Banana Mango
```

### Using a `while` Loop
```js
let fruits = ["Apple", "Banana", "Mango"];
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
// Output: Apple Banana Mango
```

### Using `for...of` (Modern, Cleaner Syntax)
```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

### Traversing in Reverse
```js
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
// Output: Mango Banana Apple
```

---

## Slice and Splice an Array

Both extract portions of an array, but behave very differently.

| | `slice()` | `splice()` |
|---|---|---|
| **Purpose** | Extracts a portion of the array **without modifying** it | Adds/removes/replaces elements, **modifying the original** array |
| **Returns** | A new array (the extracted portion) | An array of the removed elements |
| **Mutates original?** | **No** | **Yes** |
| **Can insert new elements?** | No | Yes |

### `slice(start, end)` — Non-Destructive
Extracts elements from `start` up to (but not including) `end`. Original array is untouched.
```js
let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

console.log(fruits.slice(1, 3)); // ["Banana", "Mango"]
console.log(fruits);             // unchanged: ["Apple", "Banana", "Mango", "Grapes", "Orange"]

console.log(fruits.slice(2));    // ["Mango", "Grapes", "Orange"] (from index 2 to end)
console.log(fruits.slice(-2));   // ["Grapes", "Orange"] (last 2 elements, negative index)
```

### `splice(start, deleteCount, item1, item2, ...)` — Destructive
Removes and/or inserts elements directly into the original array.
```js
let fruits = ["Apple", "Banana", "Mango", "Grapes"];

// Remove 2 elements starting at index 1
let removed = fruits.splice(1, 2);
console.log(removed); // ["Banana", "Mango"] (the removed elements)
console.log(fruits);  // ["Apple", "Grapes"] (original array is modified!)
```

**Inserting elements with `splice()`:**
```js
let fruits = ["Apple", "Grapes"];
fruits.splice(1, 0, "Banana", "Mango"); // insert at index 1, remove 0 elements
console.log(fruits); // ["Apple", "Banana", "Mango", "Grapes"]
```

**Replacing elements with `splice()`:**
```js
let fruits = ["Apple", "Banana", "Mango"];
fruits.splice(1, 1, "Orange"); // remove 1 element at index 1, insert "Orange"
console.log(fruits); // ["Apple", "Orange", "Mango"]
```

---

## Sorting in JS — Ascending, Descending, on Strings

The `.sort()` method sorts array elements **in place** (mutates the original array).

### ⚠️ Default Behavior (Important Gotcha!)
By default, `.sort()` converts elements to **strings** and sorts them lexicographically (alphabetically) — this causes unexpected results with numbers.
```js
let numbers = [40, 5, 100, 25];
console.log(numbers.sort());
// ["100", "25", "40", "5"] → WRONG numeric order!
// Because "100" comes before "25" alphabetically (as strings)
```

### Sorting Numbers — Ascending
```js
let numbers = [40, 5, 100, 25];
numbers.sort((a, b) => a - b);
console.log(numbers); // [5, 25, 40, 100]
```

### Sorting Numbers — Descending
```js
let numbers = [40, 5, 100, 25];
numbers.sort((a, b) => b - a);
console.log(numbers); // [100, 40, 25, 5]
```

### How the Compare Function Works
```js
(a, b) => a - b
```
- If result is **negative**, `a` comes before `b`.
- If result is **positive**, `b` comes before `a`.
- If result is **0**, order stays the same.

### Sorting Strings — Ascending (Alphabetical)
Works correctly by default since `.sort()` naturally compares strings.
```js
let names = ["Banana", "Apple", "Mango"];
names.sort();
console.log(names); // ["Apple", "Banana", "Mango"]
```

### Sorting Strings — Descending
```js
let names = ["Banana", "Apple", "Mango"];
names.sort().reverse();
console.log(names); // ["Mango", "Banana", "Apple"]

// Or using a compare function directly:
names.sort((a, b) => b.localeCompare(a));
console.log(names); // ["Mango", "Banana", "Apple"]
```

### Case-Insensitive String Sorting
```js
let names = ["banana", "Apple", "mango"];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names); // ["Apple", "banana", "mango"]
```

### Sorting an Array of Objects
```js
let users = [
  { name: "Sara", age: 25 },
  { name: "John", age: 20 },
  { name: "Alex", age: 30 }
];

// Sort by age ascending
users.sort((a, b) => a.age - b.age);
console.log(users);
// [{name:"John",age:20}, {name:"Sara",age:25}, {name:"Alex",age:30}]

// Sort by name alphabetically
users.sort((a, b) => a.name.localeCompare(b.name));
```

---

## Interview Questions & Answers

1. **What is an array in JavaScript?**
   An array is an ordered, index-based collection that can store multiple values (of any type) in a single variable, with indexing starting at 0.

2. **Is an array a primitive type in JavaScript?**
   No — arrays are a special type of **object**. `typeof []` returns `"object"`, not `"array"`. To check specifically for arrays, use `Array.isArray()`.

3. **What's the difference between `slice()` and `splice()`?**
   `slice()` returns a new array containing a portion of the original, without modifying it. `splice()` directly modifies the original array by removing, replacing, or inserting elements, and returns an array of the removed elements.

4. **What's the difference between `push()`/`pop()` and `shift()`/`unshift()`?**
   `push()` adds and `pop()` removes elements from the **end** of the array. `unshift()` adds and `shift()` removes elements from the **beginning** of the array. Operations at the beginning are generally slower since all other elements' indexes must shift.

5. **Why doesn't `.sort()` work correctly on numbers by default?**
   Because `.sort()` converts elements to strings by default and sorts them lexicographically (alphabetically), which doesn't match numeric order (e.g., "100" sorts before "25"). A compare function like `(a, b) => a - b` must be provided for correct numeric sorting.

6. **What does the compare function passed to `.sort()` actually do?**
   It determines the sort order: if it returns a negative number, the first argument is sorted before the second; if positive, the second comes first; if zero, their relative order is unchanged.

7. **How would you check if a variable is an array?**
   ```js
   Array.isArray(variable);
   ```
   This is more reliable than `typeof`, which returns `"object"` for both arrays and plain objects.

8. **What's the difference between `map()` and `forEach()`?**
   `map()` returns a **new array** containing the transformed results of the callback. `forEach()` simply executes a callback for each element and returns `undefined` — it's used for side effects, not transformation.

9. **How do you remove duplicate values from an array?**
   Using a `Set`, which only stores unique values:
   ```js
   let numbers = [1, 2, 2, 3, 3, 4];
   let unique = [...new Set(numbers)];
   console.log(unique); // [1, 2, 3, 4]
   ```

10. **How can you empty an array without reassigning it to a new variable?**
    ```js
    let arr = [1, 2, 3];
    arr.length = 0; // empties the array in place
    // or
    arr.splice(0, arr.length);
    ```

11. **What is the difference between `find()` and `filter()`?**
    `find()` returns the **first** element that matches the condition (or `undefined` if none match). `filter()` returns a **new array** of **all** elements that match the condition.

12. **How would you reverse an array without using `.reverse()`?**
    ```js
    let arr = [1, 2, 3, 4];
    let reversed = arr.reduceRight((acc, curr) => {
      acc.push(curr);
      return acc;
    }, []);
    console.log(reversed); // [4, 3, 2, 1]
    ```

13. **What happens if you access an array index that doesn't exist?**
    JavaScript returns `undefined` instead of throwing an error.
    ```js
    let arr = [1, 2, 3];
    console.log(arr[10]); // undefined
    ```

14. **How do you copy an array without referencing the original (shallow copy)?**
    ```js
    let original = [1, 2, 3];
    let copy1 = [...original];       // spread operator
    let copy2 = original.slice();    // slice with no args
    let copy3 = Array.from(original);
    ```
    Note: these are shallow copies — nested objects/arrays inside are still shared by reference.