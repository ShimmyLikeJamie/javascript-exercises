const caesar = function(message, shift) {
    let shiftedMessage = "";
    let currentChar = "";

    while (shift > 26) {shift -= 26;}               //Force shift value to be valid
    while (shift < -26) {shift += 26;}

    for (let i = 0; i < message.length; i++) {      //Loop through message character by character
        currentChar = message.slice(i, i + 1);      //Isolate current character
        currentChar = currentChar.charCodeAt(0);    //Retrive character code

    if (currentChar < 65 || currentChar > 122 || (currentChar > 90 && currentChar < 97)) { //If char is not a-z or A-Z, leave it alone
        shiftedMessage = shiftedMessage.concat(String.fromCharCode(currentChar));
        continue;
    }
    else if (currentChar > 64 && currentChar < 91 && currentChar + shift > 90) { //See if shift will cause lowercase wrap above bounds
        currentChar = String.fromCharCode((currentChar + shift) - 26);
    }
    else if (currentChar > 64 && currentChar < 91 && currentChar + shift < 64) { //See if shift will cuase lowercase wrap below bounds
        currentChar = String.fromCharCode((currentChar + shift) + 26);
    }
    else if (currentChar > 96 && currentChar < 123 && currentChar + shift > 122) { //See if shift will cause uppercase wrap above bounds
        currentChar = String.fromCharCode((currentChar + shift) - 26);
    }
    else if (currentChar > 96 && currentChar < 123 && currentChar + shift < 96) { //See if shift will cause uppercase wrap below bounds
        currentChar = String.fromCharCode((currentChar + shift) + 26);
    }
    else {
        currentChar = String.fromCharCode(currentChar + shift); 
    }
    shiftedMessage = shiftedMessage.concat(currentChar); //Add shifted character to the result
    }
    //console.log(message);
    //console.log(shiftedMessage);
    return shiftedMessage;
}

module.exports = caesar
