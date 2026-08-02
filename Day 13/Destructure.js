let array = [10, 20, 30, 40, 50, 0, 70, 80, 90];

let [first, sec, , , , six] = array;

console.log(first, sec, six);

//Object Destructure 

let student = {
    name: "Talha",
    age: 25,
    Occupation: "Engineer",
    Skills: {
        programming: 90,
        communication: 40,
        publicSpeaking: 10,
    }
}

const { name, Occupation: job, Skills: { programming } } = student;

console.log(name, job, programming);