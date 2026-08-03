//cashRegister method 
function cashRegister(){
    let amount = 0;
    return function (paybill){
        amount+=paybill;
        return amount;
    }
}


let restaurant = cashRegister();
let CoffeShop = cashRegister();
console.log(`Restaurant Account ${restaurant(500)}`);
console.log(`CoffeShop Account ${CoffeShop(200)}`);
console.log(`Restaurant Account ${restaurant(50)}`);
console.log(`CoffeShop Account ${CoffeShop(500)}`);
