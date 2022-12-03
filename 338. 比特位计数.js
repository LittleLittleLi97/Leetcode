/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    function parseToBiForOneCount(num) {
        let count = 0;
        while (num) {
            count += num % 2;
            num = parseInt(num / 2);
        }
        return count;
    }
    const out = [];
    for (let i = 0; i <= n; i++) {
        out.push(parseToBiForOneCount(i));
    }
    return out;
};