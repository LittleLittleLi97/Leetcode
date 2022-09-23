/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const ever = new Set();
    const M = grid.length;
    const N = grid[0].length;
    let count = 0;

    function getKey(i, j) {
        return i + ':' + j;
    }
    function traversal(i, j) {
        if (ever.has(getKey(i, j))) return;
        ever.add(getKey(i, j));
        if (i + 1 < M && grid[i + 1][j] === '1') traversal(i + 1, j);
        if (i - 1 >= 0 && grid[i - 1][j] === '1') traversal(i - 1, j);
        if (j + 1 < N && grid[i][j + 1] === '1') traversal(i , j + 1);
        if (j - 1 >= 0 && grid[i][j - 1] === '1') traversal(i, j - 1);
    }
    function isIsland(i, j) {
        if (ever.has(getKey(i, j)) || grid[i][j] === '0') return false;
        traversal(i, j);
        return true;
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (isIsland(i, j)) count++;
        }
    }
    
    return count;
};