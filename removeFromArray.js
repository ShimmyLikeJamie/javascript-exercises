const removeFromArray = function(arr) {
    for (i = 1; i < arguments.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] == arguments[i]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}

module.exports = removeFromArray
