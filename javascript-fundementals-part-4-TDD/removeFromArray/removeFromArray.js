const removeFromArray = function() {
  let iterate = arguments.length;
  let args = [];
  let array = [];

  for (i = 0; i < iterate; i++) {
    args[i] = arguments[i];
  }

  array = args.splice(0,1);

  for (let i = 0; i < array.length; i++) {
    if (args[i] == array[i]) {
      array.spice(i, i+1);
    }//let index = array.indexOf(arguments[i]);
  }
  console.log(array);
  return array;
}

module.exports = removeFromArray
