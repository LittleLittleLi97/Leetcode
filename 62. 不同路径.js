/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    function jc(n) {
        if (n === 1 || n === 0) return 1;
        return n * jc(n - 1);
    }
    return jc(m + n - 2) / (jc(n - 1) * jc(m - 1));
};