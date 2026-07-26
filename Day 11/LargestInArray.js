let arr = [1, 100, 90, 50, 20, 0];

largest=(arr)=>{
    let maxvalue = Number.MIN_VALUE;
    for(let element of arr){
        maxvalue = Math.max(maxvalue, element);
    }
    return maxvalue;
}

console.log(largest(arr));