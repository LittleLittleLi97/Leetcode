/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num >= 10) {
        let result = 0;
        while (num) {
            result += num % 10;
            num = Math.floor(num / 10);
        }
        num = result;
    }
    return num;
};