/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    function swap(locx, locy) {
        var t = nums[locx];
        nums[locx] = nums[locy];
        nums[locy] = t;
    }

    var i = nums.length - 1;
    while (i > 0 && nums[i-1] >= nums[i]) i--;
    i--;
    var u = -1;
    for (var j = nums.length - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
            if (u == -1) u = j;
            else if (nums[j] < nums[u]) u = j;
        }
    }
    if (u != -1) {
        swap(i, u);
    }
    var left = i + 1;
    var right = nums.length - 1;
    while (left < right) {
        swap(left, right);
        left++;
        right--;
    }
};