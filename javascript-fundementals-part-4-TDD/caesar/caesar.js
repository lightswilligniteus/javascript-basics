const caesar = function(string, num) {
 let stringArray = string.split("");

for(i = 0; i < stringArray.length; i++) {
  let pos = checkPosition(stringArray[i]);
  if (stringArray[i] != "," || stringArray[i] != " " || stringArray[i] != "!") {
    if (stringArray[i] == stringArray[i].toUpperCase()) {
       stringArray[i] = uppercaseAlphabet[getNewPos(pos,num)];
    } else {
      stringArray[i] = alphabet[getNewPos(pos,num)];
    }
  }
}

 return convertString(stringArray);
}

let alphabet = ["a","b","c","d'","e","f","g","h","i","j","k","l","m","n","o",
  "p","q","r","s","t","u","v","w","x","y","z",];
let uppercaseAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function convertString(array){
  let string = "";
  for(i = 0; i < array.length; i++) {
    string += array[i];
  }
  return string;
}

function checkPosition(char) {
  let pos = 0;
  char = char.toLowerCase();
  for (; pos < alphabet.length; pos++) {
    if (char == alphabet[pos]) {
      return pos;
    }
  }
}

function getNewPos(num, newPos) {
  if (num + newPos <= 26) {
    return num + newPos;
  } else {
    return num + newPos - 26 - 1;
  }
}

module.exports = caesar
