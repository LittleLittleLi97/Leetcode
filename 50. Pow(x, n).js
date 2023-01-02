/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let positivePow = false;
    if (n < 0) {
        n = -n;
        positivePow = true;
    }
    let powNum = 0;
    let out = 1;
    while (powNum < n) {
        const rest = n - powNum;
        let acc = 1;
        let multi = x;
        while (acc * 2 < rest) {
            acc *= 2;
            multi *= multi;
        }
        out *= multi;
        powNum += acc;
    }

    if (positivePow) return 1 / out;
    else return out;
};