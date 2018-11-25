const fibonacci = function(num) {
  let a = 0;
  let b = 1;
  let temp;

  if(num < 0) {
    return "OOPS";
  } else {
    for (i = 0; i < num; i++) {
    temp = b;
    b = a + b;
    a  = temp;
  }}
  return a;
}

module.exports = fibonacci
