/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let out = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        const index = columnTitle.length - 1 - i;
        out += Math.pow(26, index) * (columnTitle[i].charCodeAt() - 64);
    }
    return out;
};