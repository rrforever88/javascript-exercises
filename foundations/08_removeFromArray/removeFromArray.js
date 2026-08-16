const removeFromArray = function(array, ...items) {
    const result = array.filter(item => !items.includes(item));
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
