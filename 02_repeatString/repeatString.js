const repeatString = function(string,num) {
  let newString = '';
  if (num < 0 || num !== NaN) {
    return "ERROR"; 
  } else {
    for (i = 0; i < num; i++){
      newString += string;
    }
    return newString;
  }
};

// Do not edit below this line
module.exports = repeatString;
