let car = {
    Name : "Talha",
    Brand : "BMW",
    Model : "i8",
    Year  : 2005,
}

//method -1

/* for(let key in car){
    console.log(key + ' : ' + car[key]);
} */


//method -2

for(let key of Object.keys(car)){
    console.log(key + ' : ' + car[key]);
}
