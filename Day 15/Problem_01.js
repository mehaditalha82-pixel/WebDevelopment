/*
  Problem 2: Receipt Generator (Template Strings)
  Build a receipt generator using template strings — take item name,
  price, qty as input, output formatted multiline receipt.

  Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 Taka"
*/


function recietGen(name, price, qty){
    return `${name} X${qty} = ${price*qty} Taka`;
}

console.log(recietGen("Pen", 20, 3));