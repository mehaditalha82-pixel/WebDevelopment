const car = {
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


for(let key in car){
    console.log(key + "->" + car[key])
}