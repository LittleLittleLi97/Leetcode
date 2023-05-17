/**
 * @param {number} x
 * @return {number}
 */
// 注意：Math.floor对负数的操作会向下取整，比如-0.1会输出-1。
// 可以用~~(x / 10)的方法两次按位取反干掉小数部分，如~~(-1 / 10) = 0。
var reverse = function(x) {
    const aux = x;
    x = Math.abs(x);
    let out = 0;
    while (x) {
        out = out * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (aux < 0) out = -out;
    if (out < Math.pow(-2, 31) || out > Math.pow(2, 31) - 1) out = 0;
    return out;
};

console.log(reverse(120));

console.log(~~(-100/10));