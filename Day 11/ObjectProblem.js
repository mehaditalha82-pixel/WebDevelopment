/* Problem 14: You are given an object containing information about a student.

---- Tasks ----
Print all keys.
Print all values.
Print each key-value pair.
name: Utsho
age: 26
university: DIU
department: CSE

Count the total number of properties in the object.
Check if the object contains a property named "email".

---- Expected input:
 const student = {
  name: "Utsho",
  age: 25,
  university: "DIU",
  department: "CSE",
};

-----------------------------

---- Expected output:
name age university department

Utsho 26 DIU CSE

name: Utsho
age: 26
university: DIU
department: CSE

Total Properties: 4
Has Email: false */

const student = {
  name: "Utsho",
  age: 25,
  university: "DIU",
  department: "CSE",
};

//print all keys 
console.log(Object.keys(student).join(' '));

//print values 
let values = []
for(let key in student){
    values.push(student[key]);
}

console.log(values.join(' '));

//print key value pair 

for(let key in student){
    console.log(key + ": " + student[key]);
}

//total properties 

console.log("Total Properties: ", Object.keys(student).length);

//has email 

console.log("Has email : ", Object.hasOwn("email"));