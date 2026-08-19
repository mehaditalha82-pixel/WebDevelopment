let numbers  : number[] = [4, 5, 6];
numbers.push(90); 
numbers.push('90');  //--> we cant push string in number array 

let student: {
    name: string, 
    age: number, 
    passes: boolean,
    isActive? : boolean;  //->adding ? means optional 
} = {
    name: "Talha",
    age: 20,
    passes: true,
}