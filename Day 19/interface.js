"use strict";
let rahim = {
    name: "Rahim",
    worker: true,
};
let listWorker = [{ name: "Taha", worker: false }, { name: "Nayem", worker: true }];
const printName = (employee) => {
    let i = 0;
    for (let user of employee) {
        console.log(`User ${i} : ${user.name}`);
        i++;
    }
};
printName(listWorker);
