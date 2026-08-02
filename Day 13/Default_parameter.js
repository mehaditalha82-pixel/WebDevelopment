//without default parameter
function greet(name){
    return `Hello ${name}`;
}

console.log(greet("Talha"));
console.log(greet());

//with default parameter 

function greetings(name = 'Guest'){
    return `GutenTag ${name}`;
}

console.log(greetings());
console.log(greetings('Talha'));

//without default parameter 
makeCoffee=(sugar)=>{
    return `Coffe is made by ${sugar} spoon suger`;
}

console.log(makeCoffee());
console.log(makeCoffee(2));

//with default parameter 
makeCoffee=(sugar = 1)=>{
    return `Coffe is made by ${sugar} spoon suger`;
}

console.log(makeCoffee());
console.log(makeCoffee(2));