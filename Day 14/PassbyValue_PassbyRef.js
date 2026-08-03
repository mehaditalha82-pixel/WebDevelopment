/* In js, pass by value works for primitive datatype,
       pass by refference works for non-primitive datatype */

let a = 90;

function changeornot(value){
    value = 190;
}

changeornot(a);

console.log(a);  //doesnt change cause pass by value it copy and use data in function 

let b = [10 , 20, 30, 40, 50];

function changeref(arr){
    arr[2] = 120;
}

changeref(b);

console.log(b);

