/*
  Problem 1: Add Grade to Each Student (Without Changing Original)
  
  You have an array of student objects, each with name and marks.
  Create a NEW array where every student also has a "grade" field,
  based on their marks. The ORIGINAL array must stay exactly the same.

  Grading rule:
    marks >= 90 -> "A+"
    marks >= 80 -> "A"
    marks >= 60 -> "B"
    below 60    -> "Fail"

  Input:
    [
      { name: "Rafi", marks: 85 },
      { name: "Karim", marks: 45 }
    ]

  Output (new array):
    [
      { name: "Rafi", marks: 85, grade: "A" },
      { name: "Karim", marks: 45, grade: "Fail" }
    ]

  Original array must remain untouched (no "grade" field added to it).
*/

const add_Grade=(students)=>{

    const Getgrade=(marks)=> marks >= 90 ? "A+" : marks>=80 ? "A" : marks >= 60 ? "B" : "Fail";
    
    const modified = students.map((student)=>{

        const newStudent = {name : student.name , marks : student.marks, grade : Getgrade(student.marks)};
        return newStudent;
    })

    return modified;

}


let student_S = [
      { name: "Rafi", marks: 85 },
      { name: "Karim", marks: 45 }
    ]

console.log(student_S);

console.log(add_Grade(student_S));


/*  Problem 2: Cart Total Calculator
  
  You have an array of cart items, each with a name, price, and qty
  (quantity). Calculate:
    1. Total number of items in the cart (sum of all qty)
    2. Total cost (sum of price x qty for each item)

  Then print one final message using a template string:
    "Total: X items, Y Taka"

  Input:
    [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 }
    ]

  Output:
    "Total: 3 items, 300 Taka"

  Bonus: if the cart is missing (null/undefined), don't crash —
  print "Total: 0 items, 0 Taka" instead. */

const products = [
  { name: "Pen", price: 100, qty: 1 },
  { name: "Notebook", price: 100, qty: 2 },
  { name: "Headphone", price: 500, qty: 1 },
];


const cartDo =(products)=>{

    let totalItem = 0;
    let totalPrice = 0;

    for(let product of products){
        totalItem+=product.qty;
        totalPrice+= product.price * product.qty;
    }

    return `Total : ${totalItem} Items, ${totalPrice} Taka`;

}


console.log(cartDo(products));