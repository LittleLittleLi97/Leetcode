/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const row = grid.length;
    const column = grid[0].length;

    const dp = new Array(column).fill(0);
    for (let j = 0; j < column; j++) {
        if (j === 0) {
            dp[j] = grid[0][j];
        } else {
            dp[j] = grid[0][j] + dp[j - 1];
        }
    }
    for (let i = 1; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (j === 0) {
                dp[j] += grid[i][j];
            } else {
                dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);
            }
        }
    }

    return dp[dp.length - 1];
};