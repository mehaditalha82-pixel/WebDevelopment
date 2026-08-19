const getStockStatus = (stock:number): string => stock === 0? "Out of Stock" : stock>=1 && stock<=5 ? "Almost Sold Out" : stock >= 6 && stock<=20 ? "Available" : "In Stock";

console.log(getStockStatus(6));
console.log(getStockStatus(3));
console.log(getStockStatus(12));
console.log(getStockStatus(50));
console.log(getStockStatus(5));
console.log(getStockStatus(6));
console.log(getStockStatus(20));
console.log(getStockStatus(21));