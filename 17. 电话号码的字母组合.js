/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
    const m = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const results = [];

    function DFS(str, digits, location) {
        if (location === digits.length) {
            results.push(str);
            return;
        }
        var travelStr = digits[location];
        for (var i = 0; i < m[travelStr].length; i++) {
            DFS(str + m[travelStr][i], digits, location + 1);
        }
    }
    if (digits == '') return results
    DFS('', digits, 0);
    return results;
};