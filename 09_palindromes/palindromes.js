const palindromes = function (str) {
    let modifiedString = str.toLowerCase().replace(/[^a-z]/g, '');
    let reverseString = modifiedString.split('').reverse().join('');
    return reverseString === modifiedString;
};

// Do not edit below this line
module.exports = palindromes;
