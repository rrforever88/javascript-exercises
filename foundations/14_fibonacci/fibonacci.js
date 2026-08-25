const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    } 
    
    if (num === 0 || num === "0") {
        return 0;
    }

    let fib = [];
    let first = 0;
    let last = 1;
    let result = 0;

    for(let i = 1; i <= num; ++i) {
        // add first and last
        result = first + last;
        // append to fib
        fib.push(result);
        // update last to first
        last = first;
        first = result;
    }

    return fib.length > 0 ? fib.at(-1) : 1;

};

// Do not edit below this line
module.exports = fibonacci;
