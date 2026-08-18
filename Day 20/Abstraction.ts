abstract class PaymentProcess{
    protected recipient : string;
    protected amount : number;

    constructor(rec : string, amnt : number){
        this.recipient = rec
        this.amount = amnt;
    }

    abstract processPayment(spend : number) : boolean;

    public getReciet(){
        return `Reciept genarate for ${this.recipient} : ${this.amount}`;
    }
}

class BkashPayment extends PaymentProcess{
    private phone : string;

    constructor(rec : string, amnt : number, phone : string){
        super(rec, amnt);
        this.phone = phone;
    }

    processPayment(spend : number): boolean {
        if(spend <= this.amount){
            this.amount-=spend;
            console.log(`Processing payment for ${this.phone} : ${this.amount} BDT`)
            return true;
        }
        console.log("Insufficient Balance");
        return false;
    }
}

class BankAccount extends PaymentProcess{
    private acc : string;
    constructor(rec : string, amnt : number, acc : string){
        super(rec, amnt);
        this.acc = acc;
    }

   processPayment(spend : number): boolean {
        if(spend <= this.amount){
            this.amount-=spend;
            console.log(`Processing payment for ${this.acc} : ${this.amount} BDT`)
            return true;
        }
        console.log("Insufficient Balance");
        return false;
    }
}

const Customer_1 = new BkashPayment("Miniso", 4500, "+8801917847597");
const Customer_2 = new BankAccount("Miniso", 5500, "0060459700");

console.log(Customer_1.getReciet());
Customer_1.processPayment(500);
console.log(Customer_1.getReciet());
console.log(Customer_2.getReciet());
Customer_2.processPayment(120);
console.log(Customer_2.getReciet());
