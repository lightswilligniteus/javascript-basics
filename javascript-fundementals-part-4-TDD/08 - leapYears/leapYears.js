const leapYears = function(year) {
  return ((year % 4 == 0 && !(year % 100 === 0)) || year == 1600 || year == 2000);
}

module.exports = leapYears
