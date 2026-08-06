/*
  Problem 1: Arrow Function with Default Parameters & Logic
  Write an arrow function that calculates shipping cost based on
  order amount. Free shipping if amount >= 1000, otherwise charge
  a default fee 60 taka.

  Example: calculateShipping(1200) -> "Free Shipping"
  Example: calculateShipping(500) -> "Shipping Fee: 60 Taka"
  Example: calculateShipping(500, 100) -> "Shipping Fee: 100 Taka"
*/

const CalculateShipping =(amount, fee = 60)=>{
    return amount >= 1000 ? `Free Shipping.` : `Shipping Fee ${fee} Taka`;
}

console.log(CalculateShipping(1200));
console.log(CalculateShipping(500));
console.log(CalculateShipping(500, 100));

/*
  Problem 2: Arrow Function with Multiple Conditions
  Write an arrow function that assigns a grade based on marks.
  90+ -> "A+", 80-89 -> "A", 60-79 -> "B", below 60 -> "Fail"
  Rules: if not number -> return invalid

  Example: getGrade(95) -> "A+"
  Example: getGrade(82) -> "A"
  Example: getGrade(45) -> "Fail"
*/

const Grade=(marks)=>{
    return typeof marks != "number" ? "Invalid" : marks >= 90 ? "A+" : marks >=80 ? "A" : marks >= 60 ? "B" : "Fail"; 
}

console.log(Grade(95));
console.log(Grade(82));
console.log(Grade(45));
console.log(Grade([]));
console.log(Grade("Talha"));