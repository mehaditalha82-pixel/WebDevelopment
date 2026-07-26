let arr = [1, 100, 90, 50, 20, 0];

smallest =(arr)=>{
    let minvalue = Number.MAX_VALUE;
    for(let element of arr){
        minvalue = Math.min(minvalue, element);
    }
    return minvalue;
}

console.log(smallest(arr));