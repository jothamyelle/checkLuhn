function checkLuhn(num) {
    // change string to array
    var numArray = num.split("").map(i => {
        return parseFloat(i);
    });

    // Double every second digit
    for (var i = numArray.length - 1; i >= 0; i = i - 2) {
        numArray[i] *= 2;
    }
    
    // Sum all the individual digits
    var sum = 0;
    for (i in numArray) {
        if (numArray[i] > 9) {
            var newNumArray = (numArray[i]).toString().split("");
            var newNumber = 0;
            for(digit in newNumArray) {
                newNumArray[digit] = parseFloat(newNumArray[digit]);
                newNumber += newNumArray[digit];
            }
            numArray[i] = newNumber;
        }
        sum += numArray[i];
    }
    var checkDigit = getCheckDigit(sum);
    sum += checkDigit;

    // If the sum is a multiple of 10, the account number is possibly valid
    if (sum % 10 == 0) {
        return "This is a valid number";
    } else {
        return "Sorry, dude, your card is no good!"
    }
}

function getCheckDigit(sum){
    var totalArray = (sum * 9).toString().split("");
    var cD = parseFloat(totalArray[totalArray.length - 1]);
    return cD
}


  module.exports = {
      checkLuhn: checkLuhn
  };