const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentValue) => total * currentValue, 1);
};

const power = function(base, exponent) {
	return Math.pow(base,exponent);
};

const factorial = function(n) {
  if (n === 0 || n === 1) return 1;
  
  let final = 1;
  for (i = n; i > 0; i--){
      final *= i;
  }
  return final;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
