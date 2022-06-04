/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    var result = [];
    nums = nums.sort((a,b)=>a-b);
    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        var left = i + 1;
        var right = nums.length - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;
                left++;
                right--;
            }
            else if (sum > 0) right--;
            else left++;
        }
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));