const palindromes = function(str) {
    str = str.toLowerCase().replace(/[^a-z]/g, ''); //Makes the string lowercase and gets rid of all non-lowercase characters including spaces
    rstr = str.split('').reverse().join(''); //Reverses the order of elements in the string

    if (rstr == str) {
        return true;
    }
    else { return false; }
}
module.exports = palindromes;
