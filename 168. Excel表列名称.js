/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const out = [];
    while (columnNumber) {
        const mod = (columnNumber - 1) % 26 + 1;
        out.push(String.fromCharCode(mod + 64));
        columnNumber = parseInt((columnNumber - mod) / 26);
    }
    return out.reverse().join('');
};
// var convertToTitle = function(columnNumber) {
//     const list = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
//         'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
//     ];
//     let out = '';
//     const stack = [];
//     while (columnNumber > 26) {
//         mod = columnNumber % 26;
//         columnNumber = parseInt(columnNumber / 26);
//         if (mod === 0) {
//             mod = 26;
//             columnNumber -= 1;
//         }
//         stack.push(mod)
//     }
//     if (columnNumber) stack.push(columnNumber);
//     for (let i = 0; i < stack.length; i++) {
//         out = list[stack[i]] + out;
//     }
//     return out;
// };