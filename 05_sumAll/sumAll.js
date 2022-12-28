const sumAll = function(a,b) {
  if (a < 0 || b < 0) return "ERROR";
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  
  let sum = 0;
  if (a < b) {
    for (i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a > b) {
    for (i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
