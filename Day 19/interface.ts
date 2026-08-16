interface User {
    name : string, 
    worker : boolean
}

let rahim : User ={
    name : "Rahim",
    worker : true,
}

let listWorker : User[] = [{name : "Taha", worker : false}, {name : "Nayem", worker : true}];


const printName =(employee : User[]):void=>{
    let i : number = 0;
    for(let user  of employee){
        console.log(`User ${i} : ${user.name}`);
        i++;
    }
}

printName(listWorker);