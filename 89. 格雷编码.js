/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const out = [];
    for (let i = 0; i < 1 << n; i++) {
        out.push((i >> 1) ^ i);
    }
    return out;
};