class User{
    protected unitId : string
    protected name : string
    
    constructor(name : string , unitId : string){
        this.name = name;
        this.unitId = unitId;
    }

    getInfo(){
        return `Unit ID : ${this.unitId}, Name : ${this.name}`
    }
}

class Student extends User{
    protected age : number;
    protected isPassed : boolean;

    constructor(name : string , unitId : string, age : number, passed : boolean){
        super(name, unitId);
        this.age = age;
        this.isPassed = passed;
    }

    getInfo(): string {
        return `Student Info : 
                Student ID   : ${this.unitId},
                Student Name : ${this.name}, 
                Student Age  : ${this.age},
                Status       : ${this.isPassed ? "Pass" : "Fail"}
                `;
    }
}


const Talha = new Student("Talha", "1016", 22, true);
console.log(Talha.getInfo());
const Tamim = new User("Tamim", "1018");
console.log(Tamim.getInfo());