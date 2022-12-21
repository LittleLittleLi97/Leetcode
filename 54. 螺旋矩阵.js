/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const M = matrix.length;
    const N = matrix[0].length;
    
    const ever = new Array(M).fill(0).map(item=>new Array(N).fill(false));
    const out = [];

    let i = 0, j = 0;
    out.push(matrix[i][j]);
    ever[i][j] = true;
    while ((j + 1 < N && !ever[i][j + 1]) || (i + 1 < M && !ever[i + 1][j])) {
        while (j + 1 < N && !ever[i][j + 1]) {
            j++;
            out.push(matrix[i][j]);
            ever[i][j] = true;
        }
        while (i + 1 < M && !ever[i + 1][j]) {
            i++;
            out.push(matrix[i][j]);
            ever[i][j] = true;
        }
        while (j - 1 >= 0 && !ever[i][j - 1]) {
            j--;
            out.push(matrix[i][j]);
            ever[i][j] = true;
        }
        while (i - 1 >= 0 && !ever[i - 1][j]) {
            i--;
            out.push(matrix[i][j]);
            ever[i][j] = true;
        }
    }
    return out;
};