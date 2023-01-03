/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let out = 0;
    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        const midSquare = mid * mid;
        if (midSquare === x) return mid;
        else if (midSquare < x) {
            out = mid;
            left = mid + 1;
        }
        else right = mid - 1;
    }
    return out;
};