const repeatString = function(string, num) {
    if(num < 0) {
        return "ERROR";
    }

    message = '';

    for(let i = 1; i <= num; ++i) {
        message += string;
    }

    return message;
};

// console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
