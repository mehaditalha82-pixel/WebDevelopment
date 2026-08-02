//Traditional String 

let name = "meena";
let ans = "Her name is "+ name;

console.log(ans)

//Template String 
//use case 1

let name_ = "Meena";
let res = `Her name is ${name_}`;

console.log(res);

//use case 2 (Inline Calculation or Condition)

let price = 20000;
let isMinister = true;

let string = `The Bill is BDT ${isMinister ? price * 0.4 : price* 0.9}`;
console.log(string)

let isMuslim = false;
let greeting = `${isMuslim ? `Assalamu Alaikum` : `Namaskar`} Vaiyaji`
console.log(greeting);

//use case 3 (Multiline String)

let nameuser_ = "Talha";
let payment = 5000;

let message = `Hello ${nameuser_}
               Your Payment is Successful
               You have paid BDT ${payment}
               Thanks for using our service
               `
console.log(message);