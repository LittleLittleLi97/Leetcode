/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const q = new Array(numRows).fill(0).map(x => new Array());

    let index = 0;
    while (index < s.length) {

        let qPtr = 0;
        while (index < s.length && qPtr < q.length) {
            q[qPtr].push(s[index]);
            index++;
            qPtr++;
        }
        qPtr = q.length - 2;
        while (index < s.length && qPtr > 0) {
            q[qPtr].push(s[index]);
            index++;
            qPtr--;
        }
    }

    let out = '';
    for (let i = 0; i < q.length; i++) {
        out += q[i].join('');
    }
    return out;
};