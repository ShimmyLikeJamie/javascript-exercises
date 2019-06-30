const leapYears = function(num) {
    let leapYear = false;
    if ((num % 4) == 0 && (num % 100) != 0) {
        leapYear = true;
    }
    else if (num % 400 == 0) {
        leapYear = true;
    }
    return leapYear;
}

module.exports = leapYears
