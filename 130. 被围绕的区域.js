/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const row = board.length;
    const column = board[0].length;

    for (let i = 0; i < row; i++) {
        DFS(i, 0);
        DFS(i, column - 1);
    }
    for (let j = 0; j < column; j++) {
        DFS(0, j);
        DFS(row - 1, j);
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (board[i][j] === 'A') {
                board[i][j] = 'O';
            } else {
                board[i][j] = 'X';
            }
        }
    }
    function DFS(i, j) {
        if (i < 0 || i >= row || j < 0 || j >= column || board[i][j] !== 'O') {
            return;
        }
        board[i][j] = 'A'
        DFS(i - 1, j);
        DFS(i + 1, j);
        DFS(i, j - 1);
        DFS(i, j + 1);
    }
    return board;
};










