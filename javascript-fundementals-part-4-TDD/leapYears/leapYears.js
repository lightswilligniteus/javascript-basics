const leapYears = function(year) {
  if ((year % 4 == 0 && !(year % 100 === 0)) || year == 1600 || year == 2000) {
    return true;
  } else {
    return false;
  }
}

module.exports = leapYears
