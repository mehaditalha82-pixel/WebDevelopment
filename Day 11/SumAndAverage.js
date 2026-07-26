const arr= [15, 12, 10];

sumandavg=(arr)=>{
    let sum = 0;
    for(let element of arr){
        sum+=element;
    }
    return sum / arr.length;
}

console.log(sumandavg(arr));