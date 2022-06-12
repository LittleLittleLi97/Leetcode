/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 找两次：第一个大于等于target的位置，最后一个小于等于target的位置
 var searchRange = function(nums, target) {
    var a = -1;
    var b = -1;
    function biSearch(nums, target, isFirst) {
        var left = 0;
        var right = nums.length - 1;
        var mid = parseInt((left + right) / 2);
        var res = -1;
        while (left <= right) {
            mid = parseInt((left + right) / 2);
            if (isFirst) {
                if (nums[mid] >= target) {
                    res = mid;
                    right = mid - 1;
                }else left = mid + 1;
            }else {
                if (nums[mid] <= target) {
                    res = mid;
                    left = mid + 1;
                }else right = mid -1;
            }
        }
        return res;
    }
    a = biSearch(nums, target, true);
    b = biSearch(nums, target, false);
    if (nums[a] != target) a = -1;
    if (nums[b] != target) b = -1;
    return [a, b];
};