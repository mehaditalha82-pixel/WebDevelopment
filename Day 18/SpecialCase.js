"use strict";
const calculateTax = (amount, taxRate) => {
    if (typeof amount === 'string') {
        amount = parseFloat(amount);
    }
    return amount * taxRate;
};
console.log(calculateTax(2000, 0.15));
console.log(calculateTax('2000', 0.11));
