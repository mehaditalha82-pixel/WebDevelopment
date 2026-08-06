/*
  Problem 1: Nested Response Extractor
  Extract specific fields from a nested API-like response object using
  destructuring, with renaming + default value.

  Example: { user: { name: "Rafi", age: 22 } } -> extract name as
  userName, default age = 18 if missing
*/

const dest = (obj) => {
    const { user: { name: userName, age = 18 } } = obj;
    return {
        userName, age
    }
}

console.log(dest({ user: { name: "Rafi", age: 22 } }))
console.log(dest({ user: { name: "Rafi" } }))


/*  Swap two variables and extract first/rest elements from an array
  using destructuring, no temp variable.

  Example: [a, b] = [b, a]
  Example: [first, ...rest] = [10,20,30,40] -> first=10, rest=[20,30,40] */


let a = 5;
let b = 10;
[b, a] = [a, b];

console.log(a, b);

let arr = [10, 20, 30, 40];

[first, ...rest] = arr;

console.log(first, rest);