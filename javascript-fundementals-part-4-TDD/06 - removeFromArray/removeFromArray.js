const removeFromArray = function(...arguments) {
  const array = arguments[0];

  //filter explanation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  //includes explanation: https://www.w3schools.com/jsref/jsref_includes_array.asp
  return array.filter(arr => !arguments.includes(arr));
}

module.exports = removeFromArray
