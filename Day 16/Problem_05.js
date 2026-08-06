/*
  Problem 1: Custom Sort — Descending Numbers
  sortDescending(nums) — sort an array of numbers from largest to
  smallest, using a comparator callback passed to .sort(). Return a
  NEW array — don't mutate the original nums array.

  Input:
    [1, 10, 2, 25, 3]

  Output:
    [25, 10, 3, 2, 1]
*/

let sortDescending=(nums)=>{
    let nums2 = [...nums]; //copy to avoid mutation
    return nums2.sort((a, b)=>b-a);
}
let arr = [1, 10, 2, 25, 3];
// console.log(arr);
console.log(sortDescending(arr));
// console.log(arr);

/*
  Problem 2: Fix the Mutation Bug — Discount Preview
  previewDiscount(cart) — should return a NEW array showing what each
  cart item's price WOULD be after a 10% discount, WITHOUT changing
  the original cart. The buggy version below accidentally mutates the
  original objects because objects/arrays are passed by REFERENCE — writing to item.price inside map() edits the
  very same object the original cart array points to.

  Input:
    cart = [
      { name: "Pen", price: 100 },
      { name: "Bag", price: 500 },
    ]

  Output (new array; original cart price fields unchanged):
    [
      { name: "Pen", price: 90 },
      { name: "Bag", price: 450 },
    ]

*/


const previewDiscount =(Products)=>{
    let modified = Products.map(
        (product)=>{
            return {
                ...product,
                price : product.price * (1 - 0.1),
            }
        }
    );
    return modified;
}


let cart = [
      { name: "Pen", price: 100 },
      { name: "Bag", price: 500 },
    ]

console.log(previewDiscount(cart));
console.log(cart);