const caesar = function(string, num) {
 let stringArray = string.split("");
 let caesarString = "";

for(i = 0; i < stringArray.length; i++) {
      let tempString = String.fromCharCode(getCharCode(stringArray[i], num));
      caesarString += tempString;
    }
 return caesarString;
}

function getCharCode(character, num) {
  let specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  let charCode = character.charCodeAt(0)
  let newCharCode = charCode + num;

  if(specialCharacter.test(character) || character == " ") {
    charCode = charCode;
  } else if ((newCharCode > 97 && newCharCode < 122) || (newCharCode > 65 && newCharCode < 90)) {
    charCode = charCode + num;
  } else {
    charCode = charCode + num - 26;
  }
  return charCode;
}

module.exports = caesar
