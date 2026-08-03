let x;
console.log(x);

//undefined when we miss out putting values in a varriable

let y = null;
console.log(y);

//null is when you intentionally put null in a varriable 

//falsy values 

 let is_false = false;
 let hi = 0;
 let str = "";
 let isNull = null;
 let isNaN = NaN;
 let defined = undefined;

 if(isNull){
    console.log("Truthy");
 }
 if(isNaN){
    console.log("Truthy");
 }
 if(defined){
    console.log("Truthy");
 }
 if(is_false){
    console.log("Truthy");
 }
 if(hi){
    console.log("Truthy");
 }
 if(str){
    console.log("Truthy");
 }

 //Surprisingly Truthy values 

 let a = "false";
 let b = "0";
 let c = [];
 let d = {};
 hemster=()=>{}
 let e = -72;

 if(a){
    console.log("Truthy 1");
 }
 if(b){
    console.log("Truthy 2");
 }
 if(c){
    console.log("Truthy 3");
 }
 if(d){
    console.log("Truthy 4");
 }
 if(e){
    console.log("Truthy 5");
 }
 if(hemster){
    console.log("Truthy 6");
 }