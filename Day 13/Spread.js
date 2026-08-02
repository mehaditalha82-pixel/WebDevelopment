let arr = [1, 2, 3, 4, 5, 90];

//without spreading 
console.log(Math.max(arr))

//with spreading 
console.log(Math.max(...arr));

let arr2 = [...arr, 20, 50, 60, 90]
console.log(arr2);


let students = {
    name: "Talha",
    age: 20,
}

let student_2 = { ...students, gpa: "5.00" }
console.log(student_2);