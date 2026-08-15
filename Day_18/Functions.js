"use strict";
function sumOfNumberbyN(numbers, times) {
    let sum = numbers.reduce((accumulator, elem) => {
        return accumulator + elem;
    });
    return sum * times;
}
console.log(sumOfNumberbyN([1, 2, 3], 2));
