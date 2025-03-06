const repeatString = function(word, repetition) {
    if (repetition < 0) return 'ERROR'

    let final = ''

    for (let i = 0; i < repetition; i++) final += word;

    return final
};

// Do not edit below this line
module.exports = repeatString;
