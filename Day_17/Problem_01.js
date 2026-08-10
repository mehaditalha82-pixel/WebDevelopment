function studentIntroduction(student) {
    if(student.name && student.age && student.course){
        return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
    }else {
        return "Invalid";
    }
}


console.log(studentIntroduction({"name":"Rafi","course":"JavaScript"}))