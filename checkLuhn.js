function checkLuhn(num) {
    // change string to array
    var numArray = num.split("").map(i => {
        return parseFloat(i);
    });
    // Double every second digit, from the rightmost: (1×2) = 2, (8×2) = 16, (3×2) = 6, (2×2) = 4, (9×2) = 18
    for (var i = numArray.length - 1; i >= 0; i = i - 2) {
        numArray[i] *= 2;
    }
    // Sum all the individual digits (digits in parentheses are the products from Step 1): x (the check digit) + (2) + 7 + (1+6) + 9 + (6) + 7 + (4) + 9 + (1+8) + 7 = x + 67.
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
    console.log(sum);

    // If the sum is a multiple of 10, the account number is possibly valid. Note that 3 is the only valid digit that produces a sum (70) that is a multiple of 10.

    return "This is a vlid number";
}

function getCheckDigit(sum){
    var totalArray = (sum * 9).toString().split("");
    var cD = parseFloat(totalArray[totalArray.length - 1]);
    return cD
}


  module.exports = {
      checkLuhn: checkLuhn
  };