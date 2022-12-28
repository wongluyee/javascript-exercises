//(x-32) * (5/9)
const convertToCelsius = function(x) {
  let fahrenheit = (x-32) * (5/9);
  let roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// (x *(9/5))+32
const convertToFahrenheit = function(x) {
  let celsius = (x *(9/5))+32;
  let roundedCelsius = Math.round(celsius * 10) / 10;
  return roundedCelsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
