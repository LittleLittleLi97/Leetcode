/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let out = 0;
    let minDist = Infinity;

    nums.sort((a, b)=>a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right=  nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            const dist = Math.abs(sum - target);

            if (sum === target) return target;
            if (dist < minDist) {
                minDist = dist;
                out = sum;
            }
            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return out;
};