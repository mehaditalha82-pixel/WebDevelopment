function arraySum(numbers){
    let sum = 0;
    for(let number of numbers){
        sum+=number;
    }
    return sum;
}

let x = [1, 4, 5, 2, 9];

let answer = arraySum(x);

console.log(answer);