// interface User {
//     name : string, 
//     worker : boolean
// }

// let rahim : User ={
//     name : "Rahim",
//     worker : true,
// }

// let listWorker : User[] = [{name : "Taha", worker : false}, {name : "Nayem", worker : true}];


// const printName =(employee : User[]):void=>{
//     let i : number = 0;
//     for(let user  of employee){
//         console.log(`User ${i} : ${user.name}`);
//         i++;
//     }
// }

// printName(listWorker);



interface User{
    name : string,
    role : string,
    activeUser ? : boolean,
}

interface Admin extends User{
    allow : (targetUser : User)=>void,
}

const user: Admin = {
    name: 'Talha',
    role: 'admin',
    allow: (targetUser) => {
        console.log(`the user ${targetUser.name} is fired`);
    }
};

const user2 : User = {
    name : "Nayem",
    role : "A",
}

user.allow(user2);