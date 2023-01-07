/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const map = {};
    while (true) {
        let sum = 0;
        while (n) {
            const singleNum = n % 10;
            n = parseInt(n / 10);
            const square = singleNum * singleNum;
            sum += square;
        }
        if (map[sum]) return false;
        map[sum] = true;
        if (sum === 1) {
            return true;
        }
        n = sum;
    }
};