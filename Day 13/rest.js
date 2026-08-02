//rest operator use in function 

function sum(a, b, c, ...restNumbers) {
    let sum = 0;
    for (let i of restNumbers) {
        sum += i;
    }
    return a + b + c + sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));