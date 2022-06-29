/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    let xmax = board.length;
    let ymax = board[0].length;

    let result = false;
    let ever = new Map();

    function getNeighborLocationArr(x, y) {
        let arr = [];
        if (x - 1 >= 0) arr.push([x-1, y]);
        if (x + 1 < xmax) arr.push([x + 1, y]);
        if (y - 1 >= 0) arr.push([x, y - 1]);
        if (y + 1 < ymax) arr.push([x, y + 1]);
        return arr;
    }
    
    function DFS(nowIndex, x, y) {
        if (word[nowIndex] != board[x][y]) {
            return;
        }
        if (nowIndex === word.length - 1) {
            result = true;
            return;
        }
        ever.set([x,y].toString(), 1);
        let neighborArr = getNeighborLocationArr(x, y);
        for (var i = 0; i < neighborArr.length; i++) {
            if (!ever.get(neighborArr[i].toString())) {
                DFS(nowIndex + 1, ...neighborArr[i]);
            }
        }
        ever.set([x,y].toString(), 0);
    }

    for (let i = 0; i < xmax; i++) {
        for (let j = 0; j < ymax; j++) {
            DFS(0, i, j);
            if (result) return true;
        }
    }
    return result;
};

var board = [["a","a"]];
var word = "aaa";
console.log(exist(board, word));