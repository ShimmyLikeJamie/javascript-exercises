var repeatString = function(word, times) {
    if (times < 0) return 'ERROR';
    let string = '';
    for (let i = 0; i < times; i++) {
        string = string + word;
    }
    return string;
}

module.exports = repeatString
