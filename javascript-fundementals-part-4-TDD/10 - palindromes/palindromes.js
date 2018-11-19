const palindromes = function(string) {
  string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  string = string.replace(/ /g,"");
  string = string.toLowerCase();
  let reverseString = string.split("");
  reverseString = reverseString.reverse();
  reverseString = reverseString.join("");

  return reverseString == string ? true: false;
}

module.exports = palindromes
