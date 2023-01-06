/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let out = 0;
    for (let i = 5; i <= n; i++) {
        let now = i;
        while (now % 5 === 0) {
            now = parseInt(now / 5);
            out++;
        }
    }
    return out;
};