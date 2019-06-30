const reverseString = function(word) {
    let string = "";
    for (let i = 0; i < word.length; i++) {
        string += word[word.length - 1 - i];
    }
    return string;
}

module.exports = reverseString
