
interface Product{
    name : string, 
    price : number,
    category : string,
}



const findProducts=(Products : Product[], category : string) : Product[]=> Products.filter((elem)=>elem.category === category);




const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" }
];


console.log(findProducts(products, "phone"));