/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return '0';
    let isNegative = false;
    if (numerator < 0) {
        numerator = -numerator;
        isNegative = !isNegative;
    }
    if (denominator < 0) {
        denominator = -denominator;
        isNegative = !isNegative;
    }
    let isBack = false;
    let out = '';
    const map = {};
    while (numerator) {
        const key = getKey(numerator, denominator);
        if (map[key]) {
            const front = out.substring(0, map[key]);
            const back = out.substring(map[key]);
            out = front + '(' + back + ')';
            break;
        }
        map[key] = out.length;
        if (numerator >= denominator) {
            out += parseInt(numerator / denominator);
            numerator %= denominator;
        } else {
            out += '0';
        }
        if (numerator && numerator < denominator && !isBack) {
            out += '.';
            isBack = true;
        }
        numerator *= 10;
    }
    function getKey(a, b) {
        return `${a},${b}`
    }
    if (isNegative) return '-' + out;
    return out;
};