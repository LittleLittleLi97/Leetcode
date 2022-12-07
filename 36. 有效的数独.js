/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const row = new Array(9);
    const column = new Array(9);
    const unit = new Array(9);
    for (let i = 0; i < 9; i++) {
        row[i] = new Array(10).fill(0);
        column[i] = new Array(10).fill(0);
        unit[i] = new Array(10).fill(0);
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (value === '.') continue;

            const unitIndex = getUnitIndex(i, j);
            // console.log(i, j, unitIndex, ' : ', value, " - ", row[i][value], column[j][value], unit[unitIndex][value]);
            if (row[i][value] || column[j][value] || unit[unitIndex][value]) {
                return false;
            }
            row[i][value]++;
            column[j][value]++;
            unit[unitIndex][value]++;
        }
    }

    function getUnitIndex(i, j) {
        return parseInt(i / 3) * 3 + parseInt(j / 3);
    }

    return true;
};