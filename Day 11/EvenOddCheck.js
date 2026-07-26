//check if a number is even or odd,


function is_Even(a){
    return a%2 !== 0;
}

let number = 20;

let result = is_Even(number) ? "ODD" : "EVEN";

console.log(result);