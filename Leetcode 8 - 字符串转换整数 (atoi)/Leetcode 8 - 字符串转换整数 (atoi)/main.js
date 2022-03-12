/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var out = parseInt(s);
    if (out < -Math.pow(2,31)) out = -Math.pow(2,31)
    else if (out > Math.pow(2,31) - 1) out = Math.pow(2,31) - 1
    else if (Number.isNaN(out)) out = 0;
    return out;
};