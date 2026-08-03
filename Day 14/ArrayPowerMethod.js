let arr = [1, 5, 2, 8 , 4 ,9, 10];

let modified = arr.map(n => n*3);  //map() => change every element of every 

arr.forEach((ind, value, arr)=>{
    console.log(ind, value, arr.join(' ')); //forEach() => just iterate through the array
});

console.log(modified);


let prices = [10, 20, 50, 60, 80, 30, 20];

let expensive = prices.filter((elem)=> elem >= 50); //filter() => filter out which are true only
console.log(expensive);

let age = [1, 5, 6, 18, 20, 33, 22];

let first_Voter = age.find((i, indx)=> i >=18); //filter() => filter out which are true only first element match the condition 

console.log(first_Voter); 

let numbers = [1, 9, 2, 4, 8, 4, 6, 7, 18, 26];

let precise_numbers = numbers.slice(2, 6); //slice() => cutts of the array using index

console.log(precise_numbers);


let sum = numbers.reduce((accumulator, elem, indx)=>{
    console.log(`Accumulator :  ${accumulator}  Element : ${elem} Index ${indx}`);  //reduce()=> reduces whole array to a number
    return (elem % 2 == 0) ?  accumulator + elem : accumulator; 
}, 0);

console.log(sum);