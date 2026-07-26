let string = "mom";

checkPalindrome = (string) => {
    let rev = '';
    for (let i = string.length - 1; i >= 0; i--) {
        rev += string[i];
    }
    return rev === string;
}


console.log(checkPalindrome(string));


