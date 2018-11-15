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
  let charCode = character.charCodeAt(0);
  let newCharCode = charCode + num;
  let oldCharCode = charCode;

  if (num > 26 || num < -26) {
    num = num % 26;
  }

  if(checkSpecial(character)) {
    charCode = charCode;
  } else if (checkAlphabet(newCharCode)) {
    charCode = charCode + num;
  } else {
    if (num > 0) {
      charCode = charCode + num - 26;
      if(checkUpperLower(oldCharCode, charCode)) {
        charCode = charCode + 26;
      } else if (checkSpecial(String.fromCharCode(charCode))) {
        charCode = charCode + 26;
      }

    } else {
      charCode = charCode + num + 26;
      if(checkUpperLower(oldCharCode, charCode)) {
        charCode = charCode - 26;
      } else if (checkSpecial(String.fromCharCode(charCode))) {
        charCode = charCode - 26;
      }

  }}
  return charCode;
}

function checkSpecial(character) {
  let specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if(specialCharacter.test(character) || character == " ")  {
    return true;
  } else {
    return false;
  }
}

function checkAlphabet(character) {
  if((character > 97 && character < 122) || (character > 65 && character < 90)) {
    return true;
  } else {
    return false;
  }
}

function checkUpperLower(oldChar, newChar) {
  if (oldChar <= 90 && newChar >= 97) {
    return true;
  } else if (oldChar >= 97 && newChar <= 90) {
    return true;
  } else {
    return false;
  }
}

module.exports = caesar
