/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    var result = []
    var DFS = function(str, n, nowLeft, nowRight) {
        if (str.length == n * 2) {
            result.push(str);
            return;
        }
        if (nowLeft < n) DFS(str + '(', n, nowLeft + 1, nowRight);
        if (nowRight < nowLeft) DFS(str + ')', n, nowLeft, nowRight + 1);
    }
    DFS('', n, 0, 0);
    return result;
};