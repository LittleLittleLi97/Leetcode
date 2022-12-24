/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const M = matrix.length;
    const N  = matrix[0].length;

    const ever = new Array(M).fill(0).map(()=>new Array(N).fill(0));

    function DFS(i, j) {
        if (i >= M || j >= N) return false;
        if (ever[i][j]) {
            return false;
        }
        ever[i][j] = 1;
        if (matrix[i][j] > target) {
            return false;
        }
        if (matrix[i][j] === target) {
            return true;
        }
        return DFS(i + 1, j) || DFS(i, j + 1);
    }

    return DFS(0, 0);
};