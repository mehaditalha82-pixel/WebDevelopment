/*
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// Simple rule: discount is ALWAYS the first argument.

function calculate(discount = 5, ...prices){
  let subtotal = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
   return subtotal * (1 - discount/100); 
}

let prices = [10, 20, 30, 40, 50];

console.log(calculate(null , ...prices));

/*
  Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/

let arr1 = [10, 20, 30, 40, 50];
let arr2 = [50, 60, 20, 90];

let merged = [...arr1, ...arr2];

let newArray = Array.from(new set(merged)); // to remove duplicate putted it in set 