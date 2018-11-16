const ftoc = function(far) {
  let num = (far - 32) * 5 / 9;
  if (checkWhole(num)) {
    return num;
  } else {
    return Number(num.toFixed(1));
  }
}

const ctof = function(celc) {
  let num = celc * 9 / 5 + 32;
  if (checkWhole(num)) {
    return num;
  } else {
    return Number(num.toFixed(1));
  }
}

function checkWhole(num) {
  if ((num - Math.floor(num)) == 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  ftoc,
  ctof
}
