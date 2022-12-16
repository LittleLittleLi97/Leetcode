/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    const sum = new Array(nums.length).fill(0);
    sum[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (sum[i - 1] <= 0) {
            sum[i] = nums[i];
        } else {
            sum[i] = nums[i] + sum[i - 1];
        }
    }

    return Math.max(...sum);
};