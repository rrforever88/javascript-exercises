const palindromes = function (str) {
    // Remove puncuation and spaces
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let cleanStrReverse = cleanStr.split("").reverse().join("");

    return cleanStr === cleanStrReverse;

};

// Do not edit below this line
module.exports = palindromes;
