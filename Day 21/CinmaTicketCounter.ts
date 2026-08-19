const getTicketPrice=(age : number):number=>{
    return age < 5 ? 0 : age>=5 && age <=12 ? 100 : age>=13 && age <=59 ? 200 : 120; 
}
console.log(
getTicketPrice(3) )
// 0
 
console.log(getTicketPrice(10) )
// 100
 
console.log(getTicketPrice(25) )
// 200
 
console.log(getTicketPrice(65) ) 
// 120
