function fullname(FirstName, LastName){
    return FirstName + ' ' + LastName;
}

let MT = fullname('Mehadi', 'Talha');
console.log(MT);

function carPrice(Price, MP){
    let tax = 3;
    if(MP){
        tax = 0;
    }
    return Price + Price*tax;
}

let MP_Price = carPrice(280, true);
let mango_people = carPrice(280, false);

console.log('People price \t: ' + mango_people + "\nMP Price \t: " + MP_Price);