interface transacton{
    type : "deposit" | "withdraw",
    amount : number,
}

const processTransaction = (balance : number, transacton : transacton) : number | string =>{
    if(transacton.type === "deposit"){
        return balance+transacton.amount;
    }

    if(transacton.type === "withdraw"){
        if(balance < transacton.amount){
            return "Insufficient Balance";
        }
    }

    return balance - transacton.amount;
}


console.log(
    processTransaction(5000, { type: "deposit", amount: 2000 }),
// 7000
 
processTransaction(5000, { type: "withdraw", amount: 2000 }),
// 3000
 
// insufficient balance:
processTransaction(5000, { type: "withdraw", amount: 7000 }),
// 5000  (unchanged) 
// insufficient balance

)