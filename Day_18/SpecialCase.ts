const calculateTax = (amount : number | string, taxRate : number) : number =>{
    if(typeof amount === 'string'){
        amount = parseFloat(amount);
    }
    return amount * taxRate;
}

console.log(calculateTax(2000, 0.15));
console.log(calculateTax('2000', 0.11));

//null

const myFuture : number |null = 90;
const myVar : any = 89;