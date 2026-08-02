let car = {
    Brand: "BMW",
    Model: "M3",
    Year: "2006",
    Owner: "Talha"
}

console.log("Keys of a Object \n")
let car_keys = Object.keys(car);
console.log(car_keys)
console.log("Values of a Object \n")
let car_values = Object.values(car);
console.log(car_values)
console.log("Entries of a Object \n")
let car_entity = Object.entries(car);
console.log(car_entity)

//deleting element 
delete car.Brand;
console.log(car);

//Seal keyword (Dont allow to add or delete, but allow editing)

let bankacc = {
    accnumber: "3456789",
    accholder: "Talha",
    balance: 20000,
}




Object.seal(bankacc);

delete bankacc.accnumber;

console.log(bankacc);

bankacc.balance = 8900;

console.log(bankacc);

bankacc.nominee = "mother";

console.log(bankacc)


//freeze dont allow add elete edit 

const Passport = {
    name: "Mehadi Talha",
    age: 19,
    number: "3456787654",
}

Object.freeze(Passport);

delete Passport.name; //delete
Passport.new = "test"; //add
Passport.number = "908"; //edit

console.log(Passport);