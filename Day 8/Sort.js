let numbers = [];

for(let i = 2; i<=10; i+=2){
    numbers.push(i);
    numbers.push(20-i);
}

numbers.sort();
console.log('Default Sort (Lexographically) \t: '+ numbers);

numbers.sort((a, b) => a-b); 
console.log('Modified Sort (Accending) \t: '+ numbers);
numbers.sort((a, b) => b-a); 
console.log('Modified Sort (Deccending) \t: '+ numbers);

let names = ["banana", "Apple", "cherry", "apple", "Banana", "Cherry"];

names.sort();
console.log('\nDefault Sort (Lexographically) \t: '+ names);
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log('Modified Sort \t: '+ names);