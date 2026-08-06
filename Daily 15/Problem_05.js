/*
  Problem 1: Most Expensive Product
  Given an object of product prices, use Object.keys() or Object.entries() + loop to
  find the most expensive product.

  Example: { pen: 20, book: 150, bag: 500 } -> "bag"
*/


const getMostExpensive =(obj)=>{
    let keys = Object.keys(obj);
    let highest_price = Number.MIN_VALUE;
    let ProductName = "";
    for(key of keys){
        if(obj[key] > highest_price){
            highest_price = obj[key];
            ProductName = key;
        }
    }
    return ProductName;
}


console.log(getMostExpensive({ pen: 20, book: 150, bag: 500, laptop : 100000} ));

/*
  Problem 2: Safe Nested Access
  Safely access deeply nested optional data using ?. and ?? without
  throwing errors.

  Example: user?.address?.city ?? "City not found" when address is undefined
*/

let user1 = {
  name: "Akash",
  address: {
    city: "Comilla",
  },
};
let user2 = {
  name: "Robin",
  // address: {},
};

const safeExit =(user)=>{
    return user?.address?.city;
}

console.log(safeExit(user2))



