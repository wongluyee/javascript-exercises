//spread operator (...): accept multiple arguments.
const removeFromArray = function(array,...item) {
  return array.filter(element => !item.includes(element));
};

//Using filter method, pick up element in array UNLESS it is included in item.

/*
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
The filter() method creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/

// Do not edit below this line
module.exports = removeFromArray;
