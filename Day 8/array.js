const evens = [];
const Odds = [];
for(let i = 0; i<=20; i+=2){
    evens.push(i); // add element at last 
    Odds.push(i+1);
}
console.log('The array \t: ['+Odds + ']');
Odds.shift(); //remove first element 
console.log('After shift \t: ['+Odds + ']');
Odds.unshift(10); //add element at first 
console.log('After unshift \t: ['+Odds + ']');
Odds.push(20); //add a element at last 
console.log('After push \t: ['+Odds + ']');
Odds.pop(); //remove the last element
console.log('After pop \t: ['+Odds + ']');
const newone  = Odds.concat(evens); //join both array
console.log('After concating \t: ['+newone + ']');
const Sone  = Odds.slice(1, 5); //split from index 1 to 4
console.log('After Slice(1, 5) :  \t: ['+Sone + ']');
const joined = Odds.join(' ');
console.log(joined); //separate element with space 

const inarray = Odds.includes(6); //check if the elemt in the array or not
console.log('\nIs there a 6 in array : ' + inarray); 

const position = newone.indexOf(10);
console.log('\nPosition of 10 : ', position);

if(evens.includes(10)){
    console.log('\nPosition of 10 in evens : ', evens.indexOf(10));
}

console.log('\nIs evens a array ? \nReply : ', Array.isArray(evens));
