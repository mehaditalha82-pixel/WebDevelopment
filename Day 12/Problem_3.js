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
