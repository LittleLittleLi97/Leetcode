/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let isPositive = false;
    if (dividend < 0) isPositive = !isPositive;
    if (divisor < 0) isPositive = !isPositive;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let out = 0;
    while (dividend >= divisor) {
        let acc = 1;
        let div = divisor;
        while (div + div < dividend) {
            acc += acc;
            div += div;
        }
        dividend -= div;
        out += acc;
    }
    if (isPositive) out = -out;

    const min = -Math.pow(2, 31);
    const max = Math.pow(2, 31) - 1;
    if (out > max || out < min) return max;
    else return out;
};