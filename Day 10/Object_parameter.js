const Student = {
    Name : 'Mehadi Talha',
    id : 1016,
    course : 'Math',
    marks : 40.0,
}

function isAplus(student){
    return Student.marks >= 80 ? true : false;
}

console.log(isAplus(Student));