let subject_1 = 'Chemistry';
let subject_2 = 'CheMisTry';

console.log("Before Lower:");

if(subject_1 == subject_2){
    console.log("Duitai toh same re 😲");
}else{
    console.log("Ye kya hua 😓");
}

//to handle case_sensitivity we use these methods 

console.log("After Lower:");

if(subject_1.toLowerCase() === subject_2.toLowerCase()){
    console.log("Duitai toh same re 😲");
}else{
    console.log("Ye kya hua 😓");
}

console.log("\n----TrimCase------\n");

let string_3 = 'Halay korlo da ki';
let string_4 = "  Halay korlo da ki";

console.log("Before Trim:");

if(string_3.toLowerCase() === string_4.toLowerCase()){
    console.log("Dono same hay 😲");
}else{
    console.log("Shala dukh kyu khatam nahi hota 😓");
}

console.log("After Trim:");

if(string_3.toLowerCase().trim() === string_4.toLowerCase().trim()){
    console.log("Dono same hay 😲");
}else{
    console.log("Shala dukh kyu khatam nahi hota 😓");
}