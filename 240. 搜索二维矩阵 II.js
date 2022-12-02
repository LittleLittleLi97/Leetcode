/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let iMax = matrix.length;
    let jMax = matrix[0].length;
    function DFS(i, j) {
        if (matrix[i][j] === target) return true;
        if (matrix[i][j] > target) {
            iMax = i;
            return false;
        }
        return (i + 1 < iMax && DFS(i + 1, j)) || (j + 1 < jMax && DFS(i, j + 1));
    }
    return DFS(0, 0);
};

const matrix = [[1,1]];
const target = 20;
console.log(searchMatrix(matrix, target));