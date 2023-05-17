/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reverseSome = 0;
    while (x > reverseSome) {
        reverseSome = reverseSome * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return x === reverseSome || x === Math.floor(reverseSome / 10);
};