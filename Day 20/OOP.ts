class Student{
    name : string;
    email : string;
    age : number;
    marks : number;

    constructor(name : string, email : string, age : number, marks : number){
        this.name = name;
        this.email = email;
        this.age = age;
        this.marks = marks;
    }
}

const Talha = new Student("Talha", "b@gmail.com", 20, 85);
const Tamim = new Student("Tamim", "a@gmail.com", 18, 87);

console.log(Talha);
console.log(Tamim);