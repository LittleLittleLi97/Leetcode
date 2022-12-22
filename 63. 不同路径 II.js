/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const row = obstacleGrid.length;
    const column = obstacleGrid[0].length;

    const dp = new Array(column).fill(0);
    dp[0] = obstacleGrid[0][0] === 0 ? 1 : 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
            } else if (j > 0 && obstacleGrid[i][j - 1] !== 1) {
                dp[j] += dp[j - 1];
            }
        }
        // console.log(dp)
    }

    return dp[dp.length - 1];
};

// DFS
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     const row = obstacleGrid.length;
//     const column = obstacleGrid[0].length;

//     const ever = new Array(row).fill(0).map(()=>new Array(column).fill(undefined));

//     function DFS(i, j) {
//         if (i >= row || j >= column || obstacleGrid[i][j] === 1) return 0;
//         if (ever[i][j] !== undefined) return ever[i][j];
//         if (i === row - 1 && j === column - 1) {
//             return 1;
//         }
//         const down = DFS(i + 1, j);
//         const right = DFS(i, j + 1);
//         if (i + 1 < row) ever[i + 1][j] = down;
//         if (j + 1 < column) ever[i][j + 1] = right;
//         return down + right;
//     }

//     return DFS(0, 0);
// };