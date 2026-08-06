/*
  Problem 1: User Lookup by ID
  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/

users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]

const findUserById=(users, id)=>{
    let expectedUser = users.find(user=> user.id === id);
    return expectedUser ? expectedUser : "User not found";
}

console.log(findUserById(users, 2));

/*
  Problem 2: Shopping Cart Total (reduce)
  getCartTotal(cart) — sum price * qty across every item in the cart
  using reduce().

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
    ]

  Output:
    160   (20*3 + 50*2)
*/

const getCartTotal=(carts)=>{
    return carts.reduce((accumulator, elem)=> accumulator+=(elem.price * elem.qty), 0);
}


let cart = [
  { name: "Pen", price: 20, qty: 3 },
  { name: "Notebook", price: 50, qty: 2 },
  { name: "Speaker", price: 500, qty: 2 },
  { name: "Perfume", price: 2500, qty: 1 },
];

console.log(getCartTotal(cart));