/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (target < nums[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return left;
};