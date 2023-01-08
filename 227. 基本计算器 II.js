/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const nums = [];
    const sym = [];
    let cache = '';
    for (let i = 0; i < s.length; i++) {
        const t = s[i];
        if (t >= '0' && t <= '9') {
            cache += t;
        } else {
            if (cache.length > 0) {
                nums.push(parseInt(cache));
                cache = '';
            }
            if (t === ' ') continue;
            if (sym.length === 0) sym.push(t);
            else {
                let lastSym = sym[sym.length - 1];
                while (sym.length && getPrior(t) <= getPrior(lastSym)) {
                    const a = nums[nums.length - 2];
                    const b = nums[nums.length - 1];
                    nums.pop(); nums.pop();
                    sym.pop();
                    const result = compute(a, b, lastSym);
                    nums.push(result);
                    lastSym = sym[sym.length - 1];
                }
                sym.push(t);
            }
        }
    }
    if (cache.length > 0) {
        nums.push(parseInt(cache));
    }
    while (sym.length > 0) {
        const a = nums[nums.length - 2];
        const b = nums[nums.length - 1];
        const calculate = sym[sym.length - 1];
        nums.pop(); nums.pop();
        sym.pop();
        const result = compute(a, b, calculate);
        nums.push(result);
    }
    function getPrior(a) {
        if (a === '*' || a === '/') return 2;
        else return 1;
    }
    function compute(a, b, calculate) {
        let out;
        switch (calculate) {
            case '+':
                out = a + b;
                break;
            case '-':
                out = a - b;
                break;
            case '*':
                out = a * b;
                break;
            case '/':
                out = Math.floor(a / b);
                break;
        }
        return out;
    }

    return nums[0];
};