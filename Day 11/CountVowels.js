let word = "Aeghjo"

let vowel = "aeiou";



count_vowel=(string)=>{
    let count = 0;
    string = string.toLowerCase();    
    for(let i = 0; i<string.length; i++){
        let letter = string[i];
        if(vowel.includes(letter)){
            count++;
        }
    }
    return count;
}


console.log(count_vowel(word));