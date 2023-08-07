/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 找两次：
// 第一次找最左侧的边界，如果找到target后，左边的元素也是target，则继续往左找。
// 第二次找最右侧的边界，如果找到target后，右边的元素也是target，则继续往右找。
var searchRange = function(nums, target) {
    function biSearch(nums, target, searchLeft) {
        let left = 0;
        let right = nums.length - 1;
        let index = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                index = mid;
                if (searchLeft && mid - 1 >= 0 && nums[mid - 1] === target) {
                    right = mid - 1;
                } else if (!searchLeft && mid + 1 <= nums.length - 1 && nums[mid + 1] === target) {
                    left = mid + 1;
                } else {
                    return index;
                }
            } else if (target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return index;
    }
    return [ biSearch(nums, target, true), biSearch(nums, target, false) ];
};
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