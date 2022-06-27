/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    const map = new Map();
    map.set(1, 1);
    map.set(2, 2);
    function Count(n) {
        if (n < 1) return 0;
        let result = map.get(n);
        if (result) return result;
        result = Count(n - 1) + Count(n - 2);
        map.set(n, result);
        return result;
    }
    return Count(n);
};