/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let temp;
    if (b.length < a.length) {
        temp = a;
        a = b;
        b = temp;
    }
    const out = [];
    const interval = b.length - a.length;
    let increment = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        const bIndex = i + interval;
        let value = parseInt(a[i]) + parseInt(b[bIndex]) + increment;
        increment = parseInt(value / 2);
        value %= 2;
        out.unshift(value);
    }
    for (let i = interval - 1; i >= 0; i--) {
        let value = parseInt(b[i]) + increment;
        increment = parseInt(value / 2);
        value %= 2;
        out.unshift(value);
    }
    if (increment) out.unshift(increment);
    return out.join('');
};