/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};
// var isPowerOfTwo = function(n) {
//     if (n < 1) return false;
//     function parse(n) {
//         const stack = [];
//         while (n) {
//             stack.push(n % 2);
//             n = Math.floor(n / 2);
//         }
//         return stack;
//     }
//     const stack = parse(n);
//     for (let i = stack.length - 2; i >= 0; i--) {
//         if (stack[i]) return false;
//     }
//     return true;
// };