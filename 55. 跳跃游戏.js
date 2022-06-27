/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    var maxLocation = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i > maxLocation) return false;
        maxLocation = Math.max(maxLocation, i + nums[i]);
    }
    return true;
};