let phone = {
    Name: 'Honor',
    Model: 'X9B',
    ThreeCamera: true,
    SecondHand: false,
    appInstalled: ['ChatGPT', 'Gemini', 'NotebookLM', 'Forest'],
    SocialApp: ['Facebook', 'Insta', 'X'],
    removeOneAPP : ()=>{
        phone.appInstalled.pop();
    }
}

console.log(phone.appInstalled); //noteation 1 
phone.removeOneAPP();
console.log(phone['appInstalled']); // notation 2

let car = {
    Brand: "BMW",
    Model: "M3",
    Year: "2006",
    parts : {
            engine: ["S58 Twin Turbo Engine", "M Engine Cooling System", "M Oil Cooling System"],
            drivetrain: ["M Active Differential","M Transmission","M Drive Modes"],
            suspension: ["M Adaptive Suspension","M Steering System"],
            brakes: ["M Sport Brakes","M Carbon Ceramic Brakes"],
            exterior: ["Carbon Fiber Roof","M Aerodynamic Body Kit","M Rear Diffuser"],
            interior: ["M Sport Seats","M Carbon Bucket Seats","M Steering Wheel"]
},
    Accelarate : (speed)=>{ console.log("speed up to", speed)}

}

console.log(car.Accelarate(200));
console.log(car.parts.engine);

let KeyOfCarObject = Object.keys(car);

console.log("Car Keys : " + KeyOfCarObject.join(', '));
let valueOfCarObject = Object.values(car);

console.log("Car Keys : " + valueOfCarObject.join(', '));

console.log("Phone Object elements : ", phone);

delete phone.SocialApp;

console.log("Phone Object elements : ", phone);