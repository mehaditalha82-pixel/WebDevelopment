const numbers = [];
for(let i = 2; i<20; i+=2){
    numbers.push(i);
}

let sum = 0;

for(let number of numbers){
    sum+=number
}

console.log(sum)

let mul = 1

while(numbers.length!==0){
    mul = mul *  numbers.pop();
}

console.log(mul);