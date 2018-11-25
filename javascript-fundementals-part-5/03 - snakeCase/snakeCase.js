const snakeCase = function(string) {
    string = string.replace(/\.\./g, " ");

    if (string.indexOf(" ") < 0) {
      string = string.replace(/([A-Z])/g, " $1");
    }

    return string
      .trim()
      .replace(/ /g,"_")
      .replace(/[?=]/g,"")
      .replace(/[-]/g, "_")
      .replace(/[.,\/#!$%\^&\*;:{}=\`~()]/g,"")
      .toLowerCase();
}

module.exports = snakeCase
