/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0;
    let right = 1;
    while (right < nums.length) {
        while (right < nums.length && nums[left] === nums[right]) right++;
        if (right < nums.length) {
            nums[++left] = nums[right];
        }
    }
    return left + 1;
};