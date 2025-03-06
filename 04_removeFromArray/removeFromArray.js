const removeFromArray = function(array, ...word) {
    let newArray = []
    for (let i = 0; i < array.length; i++)
    {
        let check = false;
        for (const remove of word)
        {
            if (array[i] === remove)
            {
                check = true
                break
            }
        }

        if (!check)
        {
            newArray.push(array[i])
        }
    }

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
