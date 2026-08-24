const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)) {
        return 'ERROR';
    }

    let result = 0;
    // order arguments correctly
    if (int2 > int1) {
        for(let i = int1; i <= int2; ++i) {
            result += i;
        }
    } else if (int1 > int2) {
        for (let i = int2; i <= int1; ++i) {
            result += i;
        }
    } else {
        return int1;
    }

    return result;
};

// console.log(sumAll(4, 4));

// Do not edit below this line
module.exports = sumAll;


