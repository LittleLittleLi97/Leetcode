/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = {};
    const ever = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = true;
        }
    }
    let maxLen = 0;
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if (ever[value]) continue;
        let len = 1;
        let up = value + 1;
        while (map[up]) {
            ever[up] = true;
            len++;
            up++;
        }
        let down = value - 1;
        while (map[down]) {
            ever[down] = true;
            len++;
            down--;
        }
        if (len > maxLen) maxLen = len;
    }
    return maxLen;
};