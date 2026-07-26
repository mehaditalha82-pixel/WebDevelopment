/* Problem statement -> fizzbuzz (1 to n)

if a number is divisible by 3 print Fizz, if it divisible by 5 print Buzz 
and if divisible by both then print FizzBuzz */

let number = 15;

fizzbuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else{
            console.log(i);
        }
    }
}

fizzbuzz(number);