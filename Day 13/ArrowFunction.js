//Traditional Function 

function sayGreet(name){
    return `Hello, ${name}`;
}

console.log(sayGreet("Talha"));

//arrow function 

Hello=(name)=>{
    return name;
}

console.log(Hello("Tamim"));

//single line code ->implicit return works no need of curly braces 

sum=(a, b)=> a+b;
console.log(sum(10, 30));

//single parameter 

hi = name=> console.log("hi");

hi();