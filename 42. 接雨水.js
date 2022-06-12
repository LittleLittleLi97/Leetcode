/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    var res = 0;
    var left = 0;
    var right = height.length - 1;
    var leftMax = 0;
    var rightMax = 0;
    while (left <= right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (leftMax <= rightMax) {
            res += leftMax - height[left];
            left++;
        }else {
            res += rightMax - height[right];
            right--;
        }
    }
    return res;
};