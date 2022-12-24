/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rowSet = new Set();
    const columnSet = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rowSet.add(i);
                columnSet.add(j);
            }
        }
    }
    for (let row of rowSet) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[row][j] = 0;
        }
    }
    for (let column of columnSet) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][column] = 0;
        }
    }
};