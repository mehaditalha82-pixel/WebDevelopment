let number = 5;
fact = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(fact(number));