const data = [1, 2, 10, 5, 14, 18, 90, 70, 50];

let filter_amount = 50;

filter_greater=(data, filter_amount)=>{
    let filter_data = [];
    for(let element of data){
        if(element >= filter_amount){
            filter_data.push(element);
        }
    }
    return filter_data;
}

console.log(filter_greater(data, filter_amount));