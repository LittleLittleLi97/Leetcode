/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = {}; // symbol: index;
    let left = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        const nowSymbol = s[right];
        if (map.hasOwnProperty(nowSymbol) && map[nowSymbol] >= left) {
            // map中的记录不需要清除，只要判断重复字符是否在left-right的范围中
            left = map[nowSymbol] + 1;
        }
        map[nowSymbol] = right;
        maxLength = Math.max(right - left + 1, maxLength);
    }
    return maxLength;
};