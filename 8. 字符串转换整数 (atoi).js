/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const MIN_INT = Math.pow(-2, 31);
    const MAX_INT = Math.pow(2, 31) - 1;

    let index = 0;
    let isNegative = false;
    let out = 0;

    while (index < s.length && s[index] === ' ') index++;

    if (index < s.length && (s[index] === '-' || s[index] === '+')) {
        if (s[index] === '-') isNegative = true;
        index++;
    }

    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        out = out * 10 + (s[index] - '0');
        index++;
        if (!isNegative && out > MAX_INT) return MAX_INT;
        if (isNegative && -out < MIN_INT) return MIN_INT;
    }

    if (isNegative) out = -out;
    return out;
};