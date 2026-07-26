let string = "I Love myself more than anyone exist in my life";

count_words=(sentence)=>{
    return sentence.split(" ").length;
}

console.log(count_words(string));