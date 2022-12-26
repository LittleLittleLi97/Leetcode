/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0;
    let right = 0;
    let meet = 0;
    let last = nums[0] - 1;
    for ( ; right < nums.length; right++) {
        if (nums[right] === last) meet++;
        else {
            last = nums[right];
            meet = 1;
        }
        if (meet <= 2) nums[left++] = nums[right];
    }
    return left;
};