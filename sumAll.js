const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0) {
        return "ERROR";
    }
    else if (typeof start != "number" || typeof end != "number") {
        return "ERROR";
    }
    else if (start > end) {
        let temp = end;
        end = start;
        start = temp;
    }
    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
