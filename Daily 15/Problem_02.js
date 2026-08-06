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