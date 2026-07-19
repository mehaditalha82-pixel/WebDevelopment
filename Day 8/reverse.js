let numbers = [];

for(let i = 2; i<=10; i+=2){
    numbers.push(i);
    numbers.push(20-i);
}

console.log(numbers.join(' ')); 

numbers.reverse(); // to reverse array 

console.log(numbers.join(' ')); 


//reverse without method

let jersy_numbers = [1, 4, 10, 7, 28, 18, 16, 89]
let reversed = []
for(let jersy_number of jersy_numbers){
    reversed.unshift(jersy_number);
}

console.log(reversed.join(' '))
