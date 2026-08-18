class User{
    protected unitId : string
    protected name : string
    
    constructor(name : string , unitId : string){
        this.name = name;
        this.unitId = unitId;
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
}


const Talha = new Student("Talha", "1016", 22, true);
console.log(Talha);