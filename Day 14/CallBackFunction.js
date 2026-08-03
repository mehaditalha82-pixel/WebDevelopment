function ConvertCurrency(amount , rate , cb){
    let result = amount * rate;
    return cb(result);
}

Conv2Dollar=(value)=>{
    return `$${value}`;
}

Conv2Euro=(value)=>{
    return `E${value}`;
}

console.log(ConvertCurrency(10, 123, Conv2Dollar));
console.log(ConvertCurrency(10, 153, Conv2Euro));