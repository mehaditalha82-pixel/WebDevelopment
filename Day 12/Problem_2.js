function isElevatorSafe(weights) {
  if(Array.isArray(weights) === false){
    return "Invalid";
  }
  let total_weight = 0;
  for(let i of weights){
    total_weight+=i;
  }

  return total_weight > 400 ? false : true;
}