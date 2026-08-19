interface U{
    name : string,
    marks : number[]
}

const getStudentResult=(student : U):object=>{
    let sum : number = student.marks.reduce((acc, elem)=>acc+=elem, 0);
    let passed : string= sum/student.marks.length >=40 ? "Passed" : "Failed";
    return {
        name : student.name,
        average : sum/student.marks.length,
        result : passed,
    }
}

console.log(

    getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
}) ,

getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
})

)