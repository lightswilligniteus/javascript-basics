const snakeCase = function(string) {
  string = string.replace(/\.\./g, " ");
  console.log(string);
}

module.exports = snakeCase
