/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];
    const out = [[1], [1, 1]];
    for (let i = 3; i <= numRows; i++) {
        const last = out[out.length - 1];
        const now = [1];
        for (let left = 0, right = 1; right < last.length; left++, right++) {
            now.push(last[left] + last[right]);
        }
        now.push(1);
        out.push(now);
    }
    return out;
};