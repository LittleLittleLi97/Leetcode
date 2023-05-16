/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}; // value: index
    for (let i = 0; i < nums.length; i++) {
        const nowValue = nums[i];
        const restValue = target - nowValue;
        if (map.hasOwnProperty(restValue)) {
            return [i, map[restValue]];
        }
        map[nowValue] = i;
    }
    return [];
};