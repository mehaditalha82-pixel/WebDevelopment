function reverse_string(word){
    let reversed = '';
    for(let i = word.length-1; i>=0; i--){
        reversed+=word[i];
    }
    return reversed;
}

let rev = reverse_string("Italy");
console.log(rev);
rev = reverse_string("Talha");
console.log(rev);
rev = reverse_string("Sanjida");
console.log(rev);