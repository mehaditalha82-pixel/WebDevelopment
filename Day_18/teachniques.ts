// Array rest
const fruits = ["Apple", "Banana", "Orange", "Mango"];
const [primary, secondary, ...otherFruits] = fruits;

console.log(primary);     // "Apple"
console.log(otherFruits); // ["Orange", "Mango"]

// Object rest (extracting specific keys, grouping the rest)
const product = {
  sku: "A123",
  title: "Mechanical Keyboard",
  price: 80,
  stock: 15,
  category: "Electronics"
};

const { sku, price, ...metadata } = product;

console.log(sku);      // "A123"
console.log(metadata); // { title: 'Mechanical Keyboard', stock: 15, category: 'Electronics' }