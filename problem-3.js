function euler3(num){
  var currentNum = num;
  var factor = 2;
  var largestFactor = 1;
  while(currentNum > 2){
    if(currentNum % factor === 0){
      largestFactor = currentNum;
      currentNum /= factor;
    }
    else {
      factor++;
    }
  }
  return largestFactor;
}

console.log(euler3(600851475143))
