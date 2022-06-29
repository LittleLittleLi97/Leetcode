/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    for (var i = 0; i <= right; i++) {
        while (i <= right && nums[i] === 2) {
            nums[i] = nums[right];
            nums[right] = 2;
            right--;
        }
        if (nums[i] === 0) {
            nums[i] = nums[left];
            nums[left] = 0;
            left++;
        }
    }
    return nums;
};

//  var sortColors = function(nums) {
//     function sort(start, end) {
//         if (start >= end) return;
//         var left = start;
//         var right = end;
//         var pivot = nums[left];
//         while (left < right) {
//             while (left < right && pivot <= nums[right]) right--;
//             nums[left] = nums[right];
//             while (left < right && pivot >= nums[left]) left++;
//             nums[right] = nums[left];
//         }
//         nums[left] = pivot;
//         sort(start, left - 1);
//         sort(left + 1, end);
//     }
//     sort(0, nums.length - 1)
//     return nums;
// };

var nums = [1,2,0];
console.log(sortColors(nums));