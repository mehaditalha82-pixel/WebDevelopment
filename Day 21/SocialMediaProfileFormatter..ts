interface User{
    name : string,
    age : number,
    city : string;
}


const formatUserProfile=(user : User):string=>`${user.name} is ${user.age} years old and lives in ${user.city}`;

console.log(formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka"
}))