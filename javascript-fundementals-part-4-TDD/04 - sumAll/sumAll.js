const sumAll = function(numOne, numTwo) {
  let sum = 0;
  if(typeof(numOne) != "number" || typeof(numTwo) != "number") {
    return "ERROR";
  } else {
    if (numTwo > numOne) {
      for(;numOne <= numTwo; numOne++) {
        sum += numOne;
      }
    } else if (numOne > numTwo) {
      for(;numTwo <= numOne; numTwo++) {
        sum += numTwo;
      }
    }
    if (sum > 0) {
      return sum;
    } else {
      return "ERROR";
    }
  }
}

module.exports = sumAll
