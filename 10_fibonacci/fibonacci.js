const fibonacci = function(n) {
    //When a string such as "10" is entered, c = n*1 will convert it into number.
    let a = 0, b = 1, c = n * 1;

    if (n < 0) return "OOPS";
  
    for(let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
