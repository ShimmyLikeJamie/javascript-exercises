const fibonacci = function(num) {
    if (typeof num === "string") {
        num = parseInt(num);
    }
    else if (num <= 0) { return "OOPS";}

    let previous = 0;
    let sum = 1;
    let temp = 0;

    for (num; num > 1; num--) {
        temp = sum;
        sum += previous;
        previous = temp;
    }
    return sum;
}

module.exports = fibonacci
