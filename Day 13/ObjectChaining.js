const user = {
    name: "Utsho",
    age: 26,
    "my address": "something",
    something: [20, 30, 40, 500],
    company: {
        name: "Programming Hero",
        address: {
            location: "Mirpur DOHS",
            street: "something"
        }
    },
};

// console.log(user.company.age.days);  //its throwing an error 
console.log(user?.company?.age?.days);

for (let elem in user) {
    console.log(`{${elem} -> ${user[elem]}}`);
}

const keys = Object.keys(user)
const values = Object.values(user)
const entries = Object.entries(user)

for (let key of keys) {
    console.log(key, user[key]);
}

for (let elem of entries) {
    const [key, value] = elem
    console.log(key, value);
}