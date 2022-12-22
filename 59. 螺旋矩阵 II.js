/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const out = new Array(n).fill(0).map(()=>new Array(n).fill(0));

    let [ left, right, top, bottom ] = [ 0, n - 1, 0, n - 1 ];
    let now = 1;

    while (now <= n * n) {
        for (let i = left; i <= right; i++) out[top][i] = now++;
        top++;
        for (let i = top; i <= bottom; i++) out[i][right] = now++;
        right--;
        for (let i = right; i >= left; i--) out[bottom][i] = now++;
        bottom--;
        for (let i = bottom; i >= top; i--) out[i][left] = now++;
        left++;
    }

    return out;
};