function bonusScore(scores) {
    // Write your code here
    if(!Array.isArray(scores) || scores.length === 0 || scores.find(elem => typeof elem !== "number")){
        return "Invalid";
    }
    return scores.map((elem)=>elem+10).reduce((accumulator, elem)=>accumulator+elem, 0);
}



