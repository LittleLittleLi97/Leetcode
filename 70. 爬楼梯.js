/**
 * @param {number} n
 * @return {number}
 */
//  var climbStairs = function(n) {
//     const map = new Map();
//     map.set(1, 1);
//     map.set(2, 2);
//     function Count(n) {
//         if (n < 1) return 0;
//         let result = map.get(n);
//         if (result) return result;
//         result = Count(n - 1) + Count(n - 2);
//         map.set(n, result);
//         return result;
//     }
//     return Count(n);
// };

var climbStairs = function(n) {
    if (n <= 2) return n;
    let left = 1;
    let right = 2;
    for (let i = 3; i <= n; i++) {
        left += right;
        let t = left;
        left = right;
        right = t;
    }
    return right;
};