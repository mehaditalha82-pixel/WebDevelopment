function sumOfNumberbyN(numbers : number[], times : number):number{
    let sum :number = numbers.reduce((accumulator, elem)=>{
        return accumulator+elem;
    });
    return sum*times;
}

console.log(sumOfNumberbyN([1, 2, 3], 2));


let surName : string = "Biswash";

let getCapita =(name : string):string=>{
    return name.toUpperCase();
}

console.log(getCapita(surName));

