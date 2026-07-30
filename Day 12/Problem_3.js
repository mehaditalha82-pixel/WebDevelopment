function calculateAiCost(tokensUsed) {
    if(tokensUsed < 0 || typeof tokensUsed !== "number"){
        return "Invalid"; 
    }
    if(tokensUsed > 500){
        tokensUsed -= 500;
        tokensUsed = Math.floor(tokensUsed/100);
        tokensUsed*=5;
    }else{
        tokensUsed = 0;
    }

    return tokensUsed;
}



console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("500"));