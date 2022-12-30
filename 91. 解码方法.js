/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const ever = {};
    function DFS(index) {
        if (index > s.length) return 0;
        if (ever[index]) return ever[index];
        if (index === s.length) {
            return 1;
        }
        const str1 = s.substr(index, 1);
        const str2 = s.substr(index, 2);
        const find1 = parseInt(str1) > 0 ? DFS(index + 1) : 0;
        const find2 = parseInt(str2) <= 26 && str2[0] !== '0' ? DFS(index + 2) : 0;
        const out = find1 + find2;
        ever[index] = out;
        return out;
    }
    return DFS(0);
};