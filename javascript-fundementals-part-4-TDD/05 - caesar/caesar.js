const caesar = function(string, num) {
 let stringArray = string.split("");
 let caesarString = "";
 let mod = num % 26;

 for (let i = 0; i < stringArray.length; i++) {
   let charCode = stringArray[i].charCodeAt(0)
   if (checkAlphabet(charCode)) {
     charCode += mod;
     if (!checkAlphabet(charCode) || (charCode >= 90 && charCode - mod <= 90) || (charCode <= 122 && charCode - mod >= 122)) {
       if (num < 0) {
         charCode += 26;
       } else {
         charCode -= 26;
       }
     }
   }
   stringArray[i] = String.fromCharCode(charCode);
   caesarString += stringArray[i];
 }
return caesarString;
}

function checkAlphabet(charCode) {
  if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
    return true;
  } else {
    return false;
  }
}
module.exports = caesar
