const ftoc = function(far) {
  let num = (far - 32) * 5 / 9;
  return returnTemp(num);
}

const ctof = function(celc) {
  let num = celc * 9 / 5 + 32;
  return returnTemp(num);
}

function checkWhole(num) {
  ((num - Math.floor(num)) == 0) ? true: false;
}

function returnTemp(num) {
  if (checkWhole(num)) {
    return num;
  } else {
    return Number(num.toFixed(1));
  }
}

module.exports = {
  ftoc,
  ctof
}
