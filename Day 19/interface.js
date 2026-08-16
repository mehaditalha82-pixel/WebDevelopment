"use strict";
// interface User {
//     name : string, 
//     worker : boolean
// }
const user = {
    name: 'Talha',
    role: 'admin',
    allow: (targetUser) => {
        console.log(`the user ${targetUser.name} is fired`);
    }
};
const user2 = {
    name: "Nayem",
    role: "A",
};
user.allow(user2);
