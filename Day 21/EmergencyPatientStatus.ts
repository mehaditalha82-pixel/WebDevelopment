interface Genarel{
    name : string,
    age : number,
    type : "general",
}

interface Emergency{
    name : string, 
    age : number,
    type : "emergency",
    emergencyLevel : number,
}


const getPatientStatus =(patient : Genarel | Emergency):string =>{
    if(patient.type === "general") return "General patient";
    else if(patient.type === "emergency"){
        if(patient.emergencyLevel === 1){
            return "Critical emergency";
        }else if(patient.emergencyLevel === 2){
            return "Serious emergency";
        }
    }
    return "Moderate emergency";
}


console.log(
getPatientStatus({ name: "Rahim", age: 35, type: "general" }),
// "General patient"
 
getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 }),
// "Critical emergency"
 
getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 })
// "Moderate emergency"

);