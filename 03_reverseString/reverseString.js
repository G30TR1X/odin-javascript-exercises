const reverseString = function(sentence) {
    let word = ""
    for (let i = sentence.length - 1; i >= 0; i--) word += sentence[i]
    return word;
};

// Do not edit below this line
module.exports = reverseString;
