/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    var size = matrix.length;
    for (var i = 0; i < size; i++) { // 先转置
        for (var j = i + 1; j < size; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (var row = 0; row < size; row++) { // 再左右翻转
        var left = 0;
        var right = size - 1;
        while (left < right) {
            var temp = matrix[row][left];
            matrix[row][left] = matrix[row][right];
            matrix[row][right] = temp;
            left++;
            right--;
        }
    }
};