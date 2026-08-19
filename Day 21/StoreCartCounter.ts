interface Customer{
    name : string,
    price :number,
}

const calculateCartTotal=(product : Customer[])=> product.reduce((acc, elem)=>acc+=elem.price, 0);

console.log(
    calculateCartTotal([{ name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }])
)

console.log(
    calculateCartTotal([
        { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }

    ])
)