/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let increment = 0;

    for (let i = digits.length - 1; i >= 0; i--) {
        if (i === digits.length - 1) {
            digits[i] += 1;
            if (digits[i] >= 10) {
                increment = 1;
                digits[i] -= 10;
            }
        } else if (increment) {
            digits[i] += increment;
            if (digits[i] >= 10) {
                increment = 1;
                digits[i] -= 10;
            } else increment = 0;
        } else {
            break;
        }
    }
    if (increment) digits.unshift(1);
    return digits;
};