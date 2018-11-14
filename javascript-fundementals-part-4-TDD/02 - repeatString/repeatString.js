const repeatString = function(string, num) {
  let concatString = "";
  for(let i = 0; i < num; i++) {
    concatString += string;
  }

  if(num < 0) {
    return "ERROR";
  }

  return concatString;
}

module.exports = repeatString
