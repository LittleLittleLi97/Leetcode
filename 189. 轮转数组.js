/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const ever = {};
    for (let i = 0; i < nums.length; i++) {
        let index = i;
        let last = nums[index];
        while (!ever[index]) {
            ever[index] = true;
            const willIndex = (index + k) % nums.length;
            const t = nums[willIndex];
            nums[willIndex] = last;
            last = t;
            index = willIndex;
        }
    }
};