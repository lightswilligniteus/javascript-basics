const reverseString = function(string) {
  let reverseStr = '';
  for(var i = string.length-1; i>= 0; i--) {
    reverseStr += string[i];
  }
  return reverseStr;
}

module.exports = reverseString
