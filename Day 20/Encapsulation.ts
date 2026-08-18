class Bkash{
    public accnumber : string;
    private balance : number;
    private pin : number;
    public history : any = [];

    constructor(accnumber : string, bal : number, pin :number){
        this.accnumber = accnumber;
        this.balance = bal;
        this.pin = pin;
    }

    sendMoney(pin : number, amnt : number){
        if(this.pin === pin && amnt <= this.balance){
            this.history.push(`Send money done ${amnt}`);
            return `Transferred BDT : ${amnt}`;
        }else{
            return "Operation Failed";
        }
    }

    showBalance(pin : number){
        if(this.pin === pin){
            return this.balance;
        }else{
            return 'Invalid Pin';
        }
    }

}

const Talha = new Bkash("0060", 2000, 8918);

console.log(Talha.sendMoney(4950, 1000));
console.log(Talha.showBalance(8918));
console.log(Talha.sendMoney(8918, 1000));
console.log(Talha.history);